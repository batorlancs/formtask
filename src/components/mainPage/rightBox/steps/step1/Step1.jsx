import React from "react";
import CompanyTextInput from "./inputs/CompanyTextInput";
import CompanyTextAreaInput from "./inputs/CompanyTextAreaInput";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

const Step1 = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		clearErrors();
		if (validateFormSuccess() === true) {
			props.incCurrStepBy(1);
			console.log("submitted");
		} else {
			console.log("en error occured");
		}
	};

	const validateFormSuccess = () => {
		const { state, dispatch } = props;
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
		props.dispatch({ type: "nameError", value: "" });
		props.dispatch({ type: "emailError", value: "" });
		props.dispatch({ type: "numOfEmpError", value: "" });
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className="flex flex-col gap-2">
				<CompanyTextInput
					type="text"
					placeholder="Company Name Example Kft."
					label="Name"
					dispatch={props.dispatch}
					actionType="name"
					error={props.state.name.error}
				/>
				<CompanyTextInput
					type="email"
					placeholder="example@company.com"
					label="Email"
					dispatch={props.dispatch}
					actionType="email"
					error={props.state.email.error}
				/>
				<CompanyTextInput
					type="text"
					placeholder="1 - 100"
					label="Number of Employees"
					dispatch={props.dispatch}
					actionType="numOfEmp"
					error={props.state.numOfEmp.error}
				/>
				<CompanyTextAreaInput
					placeholder="..."
					label="Description (optional)"
					dispatch={props.dispatch}
					actionType="description"
				/>
			</div>
			{/* <button
				type="submit"
				className="px-12 py-4 bg-red-500 bg-opacity-30 rounded-3xl mt-6 float-right"
			>
				Next
			</button> */}
            <PrevNextButtons incCurrStepBy={props.incCurrStepBy} previous={false} next={true}/>
		</form>
	);
};

export default Step1;
