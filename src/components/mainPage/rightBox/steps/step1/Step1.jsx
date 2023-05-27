import React from "react";
import CompanyTextInput from "./inputs/CompanyTextInput";
import CompanyTextAreaInput from "./inputs/CompanyTextAreaInput";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

const Step1 = (props) => {
	const { incCurrStepBy, state, dispatch } = props;

	const handleSubmit = (event) => {
		event.preventDefault();
		clearErrors();
		if (validateFormSuccess() === true) {
			incCurrStepBy(1);
		}
	};

	const validateFormSuccess = () => {
		if (state.name.value === "") {
			dispatch({
				type: "nameError",
				value: "Please provide a name!",
			});
			return false;
		}
		if (state.email.value === "") {
			dispatch({
				type: "emailError",
				value: "Please provide an email!",
			});
			return false;
		} else if (!/\S+@\S+\.\S+/.test(state.email.value)) {
			dispatch({
				type: "emailError",
				value: "Email is invalid!",
			});
			return false;
		}
		if (state.numOfEmp.value === "") {
			dispatch({
				type: "numOfEmpError",
				value: "Please provide the number of employees!",
			});
			return false;
		}
		if (state.numOfEmp.value < 1 || state.numOfEmp.value > 100) {
			dispatch({
				type: "numOfEmpError",
				value: "Number of employees must be between 1 - 100!",
			});
			return false;
		}
		return true;
	};

	const clearErrors = () => {
		dispatch({ type: "nameError", value: "" });
		dispatch({ type: "emailError", value: "" });
		dispatch({ type: "numOfEmpError", value: "" });
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className="flex flex-col gap-2">
				<CompanyTextInput
					value={state.name.value}
					type="text"
					placeholder="Company Name Example Kft."
					label="Name"
					dispatch={dispatch}
					actionType="name"
					error={state.name.error}
				/>
				<CompanyTextInput
					value={state.email.value}
					type="email"
					placeholder="example@company.com"
					label="Email"
					dispatch={dispatch}
					actionType="email"
					error={state.email.error}
				/>
				<CompanyTextInput
					value={state.numOfEmp.value}
					type="text"
					placeholder="1 - 100"
					label="Number of Employees"
					dispatch={dispatch}
					actionType="numOfEmp"
					error={state.numOfEmp.error}
				/>
				<CompanyTextAreaInput
					value={state.description.value}
					placeholder="..."
					label="Description (optional)"
					dispatch={dispatch}
					actionType="description"
				/>
			</div>
			<PrevNextButtons
				incCurrStepBy={props.incCurrStepBy}
				previous={false}
				next={true}
                isSubmit={true}
                isfinal={false}
			/>
		</form>
	);
};

export default Step1;
