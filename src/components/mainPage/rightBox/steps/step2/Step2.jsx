import React, { useEffect, useRef } from "react";
import CompanyTextInput from "../step1/inputs/CompanyTextInput";
import EmployeeForm from "./forms/EmployeeForm";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

const Step2 = (props) => {
	const { incCurrStepBy, state, dispatch, employees, changeEmployee } = props;

	return (
		<div>
			<CompanyTextInput
				type="text"
				placeholder="1 - 100"
				label="Number of Employees"
				dispatch={dispatch}
				actionType="numOfEmp"
				error={state.numOfEmp.error}
				value={state.numOfEmp.value}
			/>
			<div className="w-full mt-12 grid grid-cols-2 gap-6 ">
				{employees &&
					employees.length >= state.numOfEmp.value &&
					Array.from({ length: state.numOfEmp.value }, (_, index) => (
						<EmployeeForm
							key={index}
							index={index}
							changeEmployee={changeEmployee}
							employees={employees}
						/>
					))}
			</div>
			<PrevNextButtons
				incCurrStepBy={incCurrStepBy}
				previous={true}
				next={true}
				isForm={false}
			/>
		</div>
	);
};

export default Step2;
