import React, { useReducer, useState } from "react";
import { GetStarted } from "./steps/getStarted/GetStarted";
import StepTitle from "./steps/StepTitle";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";

const reducer = (state, action) => {
	switch (action.type) {
		case "name":
			return { ...state, name: { value: action.value, error: "" } };
		case "email":
			return { ...state, email: { value: action.value, error: "" } };
		case "numOfEmp":
			return { ...state, numOfEmp: { value: action.value, error: "" } };
		case "description":
			return { ...state, description: { value: action.value } };
		case "nameError":
			return { ...state, name: { ...state.name, error: action.value } };
		case "emailError":
			return { ...state, email: { ...state.email, error: action.value } };
		case "numOfEmpError":
			return {
				...state,
				numOfEmp: { ...state.numOfEmp, error: action.value },
			};
		default:
			return state;
	}
};

const RightBox = (props) => {
	const [currStep, setCurrStep] = useState(1);

	const incCurrStepBy = (num) => {
		setCurrStep((prev) => prev + num);
	};

	const loadStep = () => {
		// if (currStep === 1)
		// 	return (
		// 		<Step1
		// 			incCurrStepBy={incCurrStepBy}
		// 			state={state}
		// 			dispatch={dispatch}
		// 		/>
		// 	);
		// else if (currStep === 2)
		// 	return (
		// 		<Step2
		// 			incCurrStepBy={incCurrStepBy}
		// 			state={state}
		// 			dispatch={dispatch}
		// 		/>
		// 	);
		return (
			<Step2
				incCurrStepBy={incCurrStepBy}
				state={state}
				dispatch={dispatch}
			/>
		);
	};

	const [state, dispatch] = useReducer(reducer, {
		name: {
			value: "",
			error: "",
		},
		email: {
			value: "",
			error: "",
		},
		numOfEmp: {
			value: "",
			error: "",
		},
		description: {
			value: "",
		},
	});

	console.log(state);

	return (
		<div
			className={`${
				props.startedForm ? "w-[60%]" : "w-[40%]"
			} h-full bg-orange-200 duration-1000 flex items-start justify-center overflow-scroll scrollbar-none`}
		>
			<div className="mt-32 px-60 w-full">
				{props.startedForm ? (
					<>
						<StepTitle currStep={currStep} />
						{loadStep()}
					</>
				) : (
					<GetStarted toggleStartedForm={props.toggleStartedForm} />
				)}
			</div>
		</div>
	);
};

export default RightBox;
