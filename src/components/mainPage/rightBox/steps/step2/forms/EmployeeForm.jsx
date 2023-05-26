import React from "react";
import EmployeeTextInput from "./inputs/EmployeeTextInput";
import EmployeeDropDownInput from "./inputs/EmployeeDropDownInput";
import EmployeeFileInput from "./inputs/EmployeeFileInput";
import PrevNextButtons from "../../sharedComponents/PrevNextButtons";

const EmployeeForm = (props) => {
	return (
		<div className="w-full min-h-32 bg-black bg-opacity-5 rounded-2xl p-6">
            <div className="flex flex-row gap-4 items-center justify-start mb-6">
                <div className="font-bold text-red-600 text-xl bg-red-500 bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center">{props.index}</div>
                <h1 className="font-bold text-xl">Employee</h1>
            </div>
			<div className="w-full flex flex-col gap-4">
                <EmployeeTextInput
                    type="text"
                    placeholder="Full Name"
                    dispatch={null}
                    actionType="numOfEmp"
                    error=""
                />
                <EmployeeTextInput
                    type="email"
                    placeholder="Email"
                    dispatch={null}
                    actionType="numOfEmp"
                    error=""
                />
                <EmployeeDropDownInput 
                    value="Accountant"
                />
                <div className="w-full grid grid-cols-2 gap-4">
                    <EmployeeTextInput
                        type="number"
                        placeholder="Age"
                        dispatch={null}
                        actionType="numOfEmp"
                        error=""
                    />
                    <EmployeeFileInput />
                </div>
            </div>
		</div>
	);
};

export default EmployeeForm;
