import React, { useEffect, useRef } from "react";
import CompanyTextInput from "../step1/inputs/CompanyTextInput";
import Step2Form from "./forms/EmployeeForm";

const Step2 = (props) => {
	const numOfEmpRef = useRef(null);

	useEffect(() => {
		if (numOfEmpRef.current) {
			numOfEmpRef.current.value = props.state.numOfEmp.value;
		}
	}, [numOfEmpRef.current]);

	console.log(props.state.numOfEmp.value);

	return (
		<div>
			<CompanyTextInput
				type="text"
				placeholder="1 - 100"
				label="Number of Employees"
				dispatch={props.dispatch}
				actionType="numOfEmp"
				error={props.state.numOfEmp.error}
				reference={numOfEmpRef}
			/>
			<div className="w-full mt-12 grid grid-cols-2 gap-6 ">
				{Array.from(
					{ length: props.state.numOfEmp.value },
					(_, index) => (
						<Step2Form key={index} index={index}/>
					)
				)}
			</div>
		</div>
	);
};

export default Step2;
