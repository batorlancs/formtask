import React from "react";
import EmployeeTextInput from "./inputs/EmployeeTextInput";
import EmployeeDropDownInput from "./inputs/EmployeeDropDownInput";
import EmployeeFileInput from "./inputs/EmployeeFileInput";

const EmployeeForm = (props) => {
	const { index, employee, changeEmployee } = props;

	return (
		<div
			className={`${
				employee.error === ""
					? "bg-black bg-opacity-5"
					: "bg-red-500 bg-opacity-10"
			} w-full min-h-32 rounded-2xl p-6`}
		>
			<div className="flex flex-row gap-4 items-center justify-start mb-6">
				<div
					className={`${
						employee.error === ""
							? "text-custom-blue-dark bg-custom-blue-light bg-opacity-30"
							: "text-red-500 bg-red-500 bg-opacity-20"
					} font-bold text-xl h-10 w-10 rounded-full flex items-center justify-center`}
				>
					{props.index + 1}
				</div>
				<div className="flex flex-col items-start justify-center">
					<h1 className="font-bold text-xl">Employee</h1>
					{employee.error !== "" && (
						<p className=" text-sm text-red-600 -mt-1">
							{employee.error}
						</p>
					)}
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
				<EmployeeTextInput
					index={index}
					change="name"
					employee={employee}
					changeEmployee={changeEmployee}
					type="text"
					placeholder="Full Name"
					error=""
				/>
				<EmployeeTextInput
					index={index}
					change="email"
					employee={employee}
					changeEmployee={changeEmployee}
					type="email"
					placeholder="Email"
					error=""
				/>
				<EmployeeDropDownInput
					index={index}
					change="jobTitle"
					employee={employee}
					changeEmployee={changeEmployee}
				/>
				<div className="w-full grid grid-cols-2 gap-4">
					<EmployeeTextInput
						index={index}
						change="age"
						employee={employee}
						changeEmployee={changeEmployee}
						type="number"
						placeholder="Age"
						error=""
					/>
					<EmployeeFileInput
						index={index}
						change="CV"
						employee={employee}
						changeEmployee={changeEmployee}
					/>
				</div>
			</div>
		</div>
	);
};

export default EmployeeForm;
