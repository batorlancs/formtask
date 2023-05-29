import React, { useState, useEffect } from "react";
import CompanyTextInput from "../step1/inputs/CompanyTextInput";
import EmployeeForm from "./forms/EmployeeForm";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

const errorMessage =
	"Handle all errors to continue! Each employee form shows what is the error!";

/**
 * This component is Step 2, Filling in Employee data of the form
 */
const Step2 = (props) => {
	const {
		incCurrStepBy,
		company,
		dispatchCompany,
		employees,
		changeEmployee,
		rightBoxRef,
	} = props;

    /**
     * Displays error message at the top of the page
     */
	const [warning, setWarning] = useState("");

    /**
     * When next button is clicked validate each and every employee form
     *  -> if no errors: move user to the next step
     *  -> if validation errors: scroll to the top of the page, and display erros
     */
	const handleClick = () => {
		let success = true;
		if (company.numOfEmp.value === "") {
			success = false;
			dispatchCompany({
				type: "numOfEmpError",
				value: "Provide the number of employees!",
			});
		}
		for (let i = 0; i < company.numOfEmp.value; i++) {
			let validationResult = validateForm(i);
			// change data
			let temp = { ...employees[i] };
			temp["error"] = validationResult;
			changeEmployee(i, temp);
			// check for success
			if (validationResult !== "") {
				success = false;
			}
		}

		if (success) {
			incCurrStepBy(1);
		} else {
			if (rightBoxRef.current) {
				rightBoxRef.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
			setWarning(errorMessage);
		}
	};

    /**
     * Validates one employee by the index and returns result of validation
     * 
     * @param {number} index index of employee
     * @returns "" if no errors, returns a message if there is an error
     */
	const validateForm = (index) => {
		let emp = employees[index];
		if (
			emp.name === "" ||
			emp.email === "" ||
			emp.age === "" ||
			emp.CV === null
		) {
			return "All fields are required";
		} else if (!/\S+@\S+\.\S+/.test(emp.email)) {
			return "Email is invalid";
		} else if (emp.age < 18) {
			return "Age must be above 18";
		}
		return "";
	};

	return (
		<div>
			<div className="grid grid-cols-2 gap-6">
				<CompanyTextInput
					type="text"
					placeholder="1 - 100"
					label="Number of Employees"
					dispatchCompany={dispatchCompany}
					actionType="numOfEmp"
					error={company.numOfEmp.error}
					value={company.numOfEmp.value}
				/>
				<div
					className={`${
						warning !== ""
							? "border-red-500 bg-red-500"
							: "border-orange-500 bg-orange-500"
					} flex items-center rounded-2xl border-[3px] border-opacity-40 bg-opacity-10 px-8`}
				>
					<p
						className={`${
							warning !== "" ? "text-red-500" : "text-orange-500"
						} text-sm font-bold opacity-80 max-2xl:text-xs`}
					>
						{warning !== ""
							? warning
							: "Please make sure you fill out all employee forms and each field inside."}
					</p>
				</div>
			</div>
			<div className="mt-12 grid w-full grid-cols-2 gap-6 ">
				{employees &&
					employees.length >= company.numOfEmp.value &&
					Array.from({ length: company.numOfEmp.value }, (_, index) => (
						<EmployeeForm
							key={index}
							index={index}
							changeEmployee={changeEmployee}
							employee={employees[index]}
						/>
					))}
				{employees && company.numOfEmp.value % 2 === 1 && (
					<div className="rounded-2xl bg-black bg-opacity-5"></div>
				)}
			</div>
			<PrevNextButtons
				incCurrStepBy={incCurrStepBy}
				isPrevious={true}
				handleClick={handleClick}
			/>
		</div>
	);
};

export default Step2;
