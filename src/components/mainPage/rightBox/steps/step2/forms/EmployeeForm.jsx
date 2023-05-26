import React from "react";
import EmployeeTextInput from "./inputs/EmployeeTextInput";
import EmployeeDropDownInput from "./inputs/EmployeeDropDownInput";
import EmployeeFileInput from "./inputs/EmployeeFileInput";

const EmployeeForm = (props) => {
	const { index, employees, changeEmployee } = props;

	return (
		<div className="w-full min-h-32 bg-black bg-opacity-5 rounded-2xl p-6">
			<div className="flex flex-row gap-4 items-center justify-start mb-6">
				<div className="font-bold text-red-600 text-xl bg-red-500 bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center">
					{props.index + 1}
				</div>
				<h1 className="font-bold text-xl">Employee</h1>
			</div>
			<div className="w-full flex flex-col gap-4">
				<EmployeeTextInput
					index={index}
                    change="name"
					employees={employees}
					changeEmployee={changeEmployee}
					type="text"
					placeholder="Full Name"
					error=""
				/>
				<EmployeeTextInput
					index={index}
                    change="email"
					employees={employees}
					changeEmployee={changeEmployee}
					type="email"
					placeholder="Email"
					error=""
				/>
				<EmployeeDropDownInput 
                    index={index}
                    change="jobTitle"
                    employees={employees}
                    changeEmployee={changeEmployee}
                />
				<div className="w-full grid grid-cols-2 gap-4">
					<EmployeeTextInput
						index={index}
                        change="age"
						employees={employees}
						changeEmployee={changeEmployee}
						type="number"
						placeholder="Age"
						error=""
					/>
					<EmployeeFileInput
                        index={index}
                        change="CV"
                        employees={employees}
                        changeEmployee={changeEmployee}
                    />
				</div>
			</div>
		</div>
	);
};

export default EmployeeForm;
