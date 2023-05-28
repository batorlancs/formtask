import React from "react";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";
import CompanyPreview from "./previews/CompanyPreview";
import EmployeePreview from "./previews/EmployeePreview";

const Step3 = (props) => {
	const { incCurrStepBy, state, employees } = props;

	const handleSubmit = (event) => {
		event.preventDefault();
		props.incCurrStepBy(1);
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
				incCurrStepBy={props.incCurrStepBy}
				previous={true}
				next={true}
				isSubmit={true}
				isFinal={true}
			/>
		</form>
	);
};

export default Step3;
