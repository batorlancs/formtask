import React from "react";
import EmployeeTextInput from "./inputs/EmployeeTextInput";

const EmployeeForm = (props) => {
	return (
		<div className="w-full min-h-32 bg-black bg-opacity-5 rounded-2xl p-6">
            <h1 className="font-bold mb-6 rounded-2xl w-full bg-black bg-opacity-5 p-2 pl-8">{props.index}. Employee</h1>
			<div className="w-full flex flex-col gap-4">
                <EmployeeTextInput
                    type="text"
                    placeholder="Employee Exmaple"
                    label="Full Name"
                    dispatch={null}
                    actionType="numOfEmp"
                    error=""
                    reference={null}
                />
                <EmployeeTextInput
                    type="email"
                    placeholder="employee@company.com"
                    label="Email"
                    dispatch={null}
                    actionType="numOfEmp"
                    error=""
                    reference={null}
                />
                {/* dropdown menu input */}
                <EmployeeTextInput
                    type="number"
                    placeholder="18+"
                    label="Age"
                    dispatch={null}
                    actionType="numOfEmp"
                    error=""
                    reference={null}
                />
                {/* file input with pdf */}
            </div>
		</div>
	);
};

export default EmployeeForm;
