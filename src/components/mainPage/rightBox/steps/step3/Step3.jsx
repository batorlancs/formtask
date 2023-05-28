import React from "react";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";
import CompanyPreview from "./previews/CompanyPreview";
import EmployeePreview from "./previews/EmployeePreview";
import { db } from "../../../../../firebase";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

const Step3 = (props) => {
	const { incCurrStepBy, state, employees, setFirebaseID } = props;

	const handleSubmit = async (event) => {
		event.preventDefault();

        // send data to firebase
        const companyRef = await addDoc(collection(db, "companies"), {
            name: state.name.value,
            email: state.email.value,
            numOfEmp: state.numOfEmp.value,
            description: state.description.value,
        })

        for (let index = 0; index < state.numOfEmp.value; index++) {
            let emp = employees[index];
            let employeeRef = doc(db, `companies/${companyRef.id}/employees`, index.toString());
            await setDoc(employeeRef, {
                name: emp.name,
                email: emp.email,
                jobTitle: emp.jobTitle,
                age: emp.age,
                CV: "testing",
            })
        }

        setFirebaseID(companyRef.id);

		incCurrStepBy(1);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
            <h1 className="text-2xl px-8 py-4 mb-6 font-bold rounded-2xl bg-red-400 text-white">Company Details</h1>
			<CompanyPreview state={state} />
            <h1 className="text-2xl px-8 py-4 mt-6 font-bold rounded-2xl bg-red-400 text-white">Employee Details</h1>
			<div className="grid grid-cols-1 gap-6 mt-6">
				{employees
					.slice(0, state.numOfEmp.value)
					.map((employee, index) => (
						<EmployeePreview
							employee={employee}
							index={index}
							numOfEmp={state.numOfEmp.value}
						/>
					))}
			</div>
			<PrevNextButtons
				incCurrStepBy={incCurrStepBy}
				previous={true}
				next={true}
				isSubmit={true}
				isFinal={true}
			/>
		</form>
	);
};

export default Step3;
