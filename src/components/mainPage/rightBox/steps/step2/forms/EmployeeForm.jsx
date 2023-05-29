import React from "react";
import EmployeeTextInput from "./inputs/EmployeeTextInput";
import EmployeeDropDownInput from "./inputs/EmployeeDropDownInput";
import EmployeeFileInput from "./inputs/EmployeeFileInput";

/**
 * This component is an Employee Form that stores form data in the employees array at index
 */
const EmployeeForm = (props) => {
	const { index, employee, changeEmployee } = props;

	return (
		<div
			className={`${
				employee.error === ""
					? "bg-black bg-opacity-5"
					: "bg-red-500 bg-opacity-10"
			} min-h-32 w-full rounded-2xl p-6`}
		>
			<div className="mb-6 flex flex-row items-center justify-start gap-4">
				<div
					className={`${
						employee.error === ""
							? "bg-custom-blue-light bg-opacity-30 text-custom-blue-dark"
							: "bg-red-500 bg-opacity-20 text-red-500"
					} flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold`}
				>
					{props.index + 1}
				</div>
				<div className="flex flex-col items-start justify-center">
					<h1 className="text-xl font-bold">Employee</h1>
					{employee.error !== "" && (
						<p className=" -mt-1 text-sm text-red-600">
							{employee.error}
						</p>
					)}
				</div>
			</div>
			<div className="flex w-full flex-col gap-4">
				<EmployeeTextInput
					index={index}
					change="name"
					employee={employee}
					changeEmployee={changeEmployee}
					type="text"
					placeholder="Full Name"
				/>
				<EmployeeTextInput
					index={index}
					change="email"
					employee={employee}
					changeEmployee={changeEmployee}
					type="email"
					placeholder="Email"
				/>
				<EmployeeDropDownInput
					index={index}
					change="jobTitle"
					employee={employee}
					changeEmployee={changeEmployee}
				/>
				<div className="grid w-full grid-cols-2 gap-4">
					<EmployeeTextInput
						index={index}
						change="age"
						employee={employee}
						changeEmployee={changeEmployee}
						type="number"
						placeholder="Age"
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
