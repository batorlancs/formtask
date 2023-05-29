import React from "react";
import CompanyTextInput from "./inputs/CompanyTextInput";
import CompanyTextAreaInput from "./inputs/CompanyTextAreaInput";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

/**
 * This component is Step 1, Filling in Company data of the form
 */
const Step1 = (props) => {
	const { incCurrStepBy, company, dispatchCompany } = props;

    /**
     * This function cleans all errors and revalidates each field, moves user to the next step
     */
	const handleSubmit = (event) => {
		event.preventDefault();
		clearErrors();
		if (validateFormSuccess() === true) {
			incCurrStepBy(1);
		}
	};

    /**
     * This function validates each field for the company form
     * 
     * @returns if validation ends in success -> true, is validation ends in error -> false
     */
	const validateFormSuccess = () => {
		if (company.name.value === "") {
			dispatchCompany({
				type: "nameError",
				value: "Please provide a name!",
			});
			return false;
		}
		if (company.email.value === "") {
			dispatchCompany({
				type: "emailError",
				value: "Please provide an email!",
			});
			return false;
		} else if (!/\S+@\S+\.\S+/.test(company.email.value)) {
			dispatchCompany({
				type: "emailError",
				value: "Email is invalid!",
			});
			return false;
		}
		if (company.numOfEmp.value === "") {
			dispatchCompany({
				type: "numOfEmpError",
				value: "Please provide the number of employees!",
			});
			return false;
		}
		if (company.numOfEmp.value < 1 || company.numOfEmp.value > 100) {
			dispatchCompany({
				type: "numOfEmpError",
				value: "Number of employees must be between 1 - 100!",
			});
			return false;
		}
		return true;
	};

    /**
     * clear all errors in company form
     */
	const clearErrors = () => {
		dispatchCompany({ type: "nameError", value: "" });
		dispatchCompany({ type: "emailError", value: "" });
		dispatchCompany({ type: "numOfEmpError", value: "" });
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className="flex flex-col gap-2">
				<CompanyTextInput
					value={company.name.value}
					type="text"
					placeholder="Company Name Example Kft."
					label="Name"
					dispatchCompany={dispatchCompany}
					actionType="name"
					error={company.name.error}
				/>
				<CompanyTextInput
					value={company.email.value}
					type="email"
					placeholder="example@company.com"
					label="Email"
					dispatchCompany={dispatchCompany}
					actionType="email"
					error={company.email.error}
				/>
				<CompanyTextInput
					value={company.numOfEmp.value}
					type="text"
					placeholder="1 - 100"
					label="Number of Employees"
					dispatchCompany={dispatchCompany}
					actionType="numOfEmp"
					error={company.numOfEmp.error}
				/>
				<CompanyTextAreaInput
					value={company.description.value}
					placeholder="..."
					label="Description (optional)"
					dispatchCompany={dispatchCompany}
					actionType="description"
				/>
			</div>
			<PrevNextButtons incCurrStepBy={incCurrStepBy} />
		</form>
	);
};

export default Step1;
