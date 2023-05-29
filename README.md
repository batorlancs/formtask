# FORMTASK - About
Simple form page with dynamic rendering.

the website is deployed and available at -> https://formtask-3e7f1.web.app/

## Description
This web application is built in javascript and react using Vite. The backend used for this project is firebase (firestore, storage).
The website allows users to add data to the firebase cloud database by filling out this form with the correct details.

## The Form Filling Process
Users have to go through four steps to be able to successfuly upload details to the cloud. These four steps are:

1. Getting Started
2. Filling out Company Data Form
3. Fillinf out Employee Data Forms
4. Verifying and Submitting

In each step there will be some validations to make sure the users is inputting correct data. When the data has been uploaded successfully the user has the option to get the data from firebase and download it as a JSON.
This is the only way to check how you details have been uploaded to the backend. If you leave this page you will not have access to your data anymore.

## Company Form Implementation
The company form is checking for errors in all three required fields, and will give a very specific instructions under the incorrect input.
The algorithm will always only display the first input, where the error occurs, this way the user has to think about resolving one error at once.

Using a the useReducer hook allowed me to store all values and errors in one object, that are all changable with a single function.

```
const [company, dispatchCompany] = useReducer(reducer, {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  numOfEmp: {
    value: "",
    error: "",
  },
  description: {
    value: "",
  },
});
```

## Employee Form Implementation
The employee forms are dynamically changable in number, however, they will always keep their values no matter how much you this number is changed.
When inputting the number, the array is always populated never depopulated.

```
const populateEmployees = (length) => {
  let employeeData = {
    name: "",
    email: "",
    jobTitle: "Accountant",
    age: "",
    CV: null,
    error: "",
  };
  for (let i = 0; i < length - employees.length; i++) {
    setEmployees((prev) => [...prev, employeeData]);
  }
};
```

## Sending data to Firebase & Handling PDF Files
When uploading all data to the Firestore, there was a the .pdf files, which needed special handling. These are the steps the application takes to upload all data to the backend.

### 1. Uploading company data in a collection and getting document reference
```
const companyRef = await addDoc(collection(db, "companies"), {
  name: company.name.value,
  email: company.email.value,
  numOfEmp: company.numOfEmp.value,
  description: company.description.value,
});
```
### 2. Upload employee data to the "employees" subcollection to the referenced document

Loop through each employee in the array and upload them
```
for (let index = 0; index < company.numOfEmp.value; index++) {
  await uploadEmployee(companyRef, index);
}
```

To handle PDF files, it first uploads the pdf file to firebase storage. When it is uploaded it get the URL of the file, and passes it in as the value to the CV field in employee data.
Then, it uploads it to the employees subcollection.
```
const uploadEmployee = async (companyRef, index) => {
  return new Promise((resolve) => {
    let file = employees[index].CV;
    let fileRef = ref(storage, `companies/${companyRef.id}/${index}.pdf`);
    uploadBytes(fileRef, file)
      .then((fileSnap) => {
        getDownloadURL(fileSnap.ref)
          .then((url) => {
            let emp = employees[index];
            let employeeRef = doc(db, `companies/${companyRef.id}/employees`, index.toString());
            setDoc(employeeRef, {
              name: emp.name,
              email: emp.email,
              jobTitle: emp.jobTitle,
              age: emp.age,
              CV: url,
            })
            .then(() => {
              resolve();
            })
          })
      })
  });
};
```
