import React, { useState } from "react";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";
import CompanyPreview from "./previews/CompanyPreview";
import EmployeePreview from "./previews/EmployeePreview";
import { db, storage } from "../../../../../firebase";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * This component is Step 3, Verifying and Uploading all forms
 * --> this component displays all data in a simpe form
 *          --> company data, and each employee data
 */
const Step3 = (props) => {
	const { incCurrStepBy, company, employees, setFirebaseID } = props;

    /**
     * Animation for next button (loading when uploading to firebase)
     */
	const [isLoading, setIsLoading] = useState(false);

    /**
     * When clicking submit, upload all data including company form, all employee forms in the array to firebase
     * --> PDF files (CV) is uploaded to firebase storage and is referenced in firestore by its link
     */
	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		// send company data to firebase
		const companyRef = await addDoc(collection(db, "companies"), {
			name: company.name.value,
			email: company.email.value,
			numOfEmp: company.numOfEmp.value,
			description: company.description.value,
		});

        // send each employee data as a subcollection to company document
		for (let index = 0; index < company.numOfEmp.value; index++) {
			await uploadEmployee(companyRef, index);
		}

		console.log("success");
		setIsLoading(false);
		setFirebaseID(companyRef.id);
		incCurrStepBy(1);
	};

    /**
     * upload one employee by the id of "index" to the referenced company document
     * 
     * @param {object} companyRef reference of document in firebase
     * @param {number} index index of employee in array
     * @returns 
     */
	const uploadEmployee = async (companyRef, index) => {
		return new Promise((resolve) => {
			// upload file to firebase storage
			let file = employees[index].CV;
			let fileRef = ref(
				storage,
				`companies/${companyRef.id}/${index}.pdf`
			);
			uploadBytes(fileRef, file)
				.then((fileSnap) => {
					// get url of uploaded file
					getDownloadURL(fileSnap.ref)
						.then((url) => {
							// upload each employee to the employees collection within the uploaded company
							let emp = employees[index];
							let employeeRef = doc(
								db,
								`companies/${companyRef.id}/employees`,
								index.toString()
							);
							setDoc(employeeRef, {
								name: emp.name,
								email: emp.email,
								jobTitle: emp.jobTitle,
								age: emp.age,
								CV: url,
							})
								.then(() => {
                                    // employee has been uploaded
									resolve();
								})
								.catch(() => {
                                    console.log("an error occured uploading to firebase");
									setIsLoading(false);
								});
						})
						.catch(() => {
                            console.log("an error occured uploading to firebase");
							setIsLoading(false);
						});
				})
				.catch(() => {
                    console.log("an error occured uploading to firebase");
					setIsLoading(false);
				});
		});
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<h1 className="mb-6 rounded-2xl bg-custom-purple bg-opacity-70 px-8 py-4 text-2xl font-bold text-white">
				Company Details
			</h1>
			<CompanyPreview company={company} />
			<h1 className="mt-6 rounded-2xl bg-custom-blue-dark bg-opacity-70 px-8 py-4 text-2xl font-bold text-white">
				Employee Details
			</h1>
			<div className="mt-6 grid grid-cols-1 gap-6">
				{employees
					.slice(0, company.numOfEmp.value)
					.map((employee, index) => (
						<EmployeePreview
							key={index}
							employee={employee}
							index={index}
							numOfEmp={company.numOfEmp.value}
						/>
					))}
			</div>
			<PrevNextButtons
				incCurrStepBy={incCurrStepBy}
				isPrevious={true}
				isFinal={true}
				isLoading={isLoading}
			/>
		</form>
	);
};

export default Step3;
