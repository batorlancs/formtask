import React, { useState } from "react";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";
import CompanyPreview from "./previews/CompanyPreview";
import EmployeePreview from "./previews/EmployeePreview";
import { db, storage } from "../../../../../firebase";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Step3 = (props) => {
	const { incCurrStepBy, state, employees, setFirebaseID } = props;
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		// send data to firebase
		const companyRef = await addDoc(collection(db, "companies"), {
			name: state.name.value,
			email: state.email.value,
			numOfEmp: state.numOfEmp.value,
			description: state.description.value,
		});

		for (let index = 0; index < state.numOfEmp.value; index++) {
			await uploadEmployee(companyRef, index);
		}

		console.log("success");
		setIsLoading(false);
		setFirebaseID(companyRef.id);
		incCurrStepBy(1);
	};

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
									resolve();
								})
								.catch(() => {
									setIsLoading(false);
								});
						})
						.catch(() => {
							setIsLoading(false);
						});
				})
				.catch(() => {
					setIsLoading(false);
				});
		});
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<h1 className="mb-6 rounded-2xl bg-custom-purple bg-opacity-70 px-8 py-4 text-2xl font-bold text-white">
				Company Details
			</h1>
			<CompanyPreview state={state} />
			<h1 className="mt-6 rounded-2xl bg-custom-blue-dark bg-opacity-70 px-8 py-4 text-2xl font-bold text-white">
				Employee Details
			</h1>
			<div className="mt-6 grid grid-cols-1 gap-6">
				{employees
					.slice(0, state.numOfEmp.value)
					.map((employee, index) => (
						<EmployeePreview
							key={index}
							employee={employee}
							index={index}
							numOfEmp={state.numOfEmp.value}
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
