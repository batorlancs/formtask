import React, { useReducer, useState, useEffect } from "react";
import { GetStarted } from "./steps/getStarted/GetStarted";
import StepTitle from "./steps/StepTitle";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";

const reducer = (state, action) => {
	switch (action.type) {
		case "name":
			return { ...state, name: { value: action.value, error: "" } };
		case "email":
			return { ...state, email: { value: action.value, error: "" } };
		case "numOfEmp":
			// check if it is number
			if (isNaN(action.value) || action.value.includes(" "))
				return { ...state };
			let num = parseInt(action.value);
			if (num > 100 || num < 1) return { ...state };
			else
				return {
					...state,
					numOfEmp: { value: action.value, error: "" },
				};
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

	// const [state, dispatch] = useReducer(reducer, {
	// 	name: {
	// 		value: "",
	// 		error: "",
	// 	},
	// 	email: {
	// 		value: "",
	// 		error: "",
	// 	},
	// 	numOfEmp: {
	// 		value: "",
	// 		error: "",
	// 	},
	// 	description: {
	// 		value: "",
	// 	},
	// });

    // dev resources
    const [state, dispatch] = useReducer(reducer, {
		name: {
			value: "dev",
			error: "",
		},
		email: {
			value: "dev@dev.com",
			error: "",
		},
		numOfEmp: {
			value: "1",
			error: "",
		},
		description: {
			value: "",
		},
	});

	const [employees, setEmployees] = useState([
		{
			name: "",
			email: "",
			jobTitle: "Accountant",
			age: "",
			CV: null,
            error: "",
		},
	]);

    console.log(employees);

	const populateEmployees = (length) => {
		let employeeData = {
			name: "",
			email: "",
			jobTitle: "Accountant",
			age: "",
			CV: null,
            error: ""
		};
		for (let i = 0; i < length - employees.length; i++) {
			setEmployees((prev) => [...prev, employeeData]);
		}
	};

	useEffect(() => {
		populateEmployees(state.numOfEmp.value);
	}, [state.numOfEmp.value]);

	const changeEmployee = (index, employee) => {
        setEmployees(prev => {
            let temp = [...prev];
            temp[index] = employee;
            return temp;
        })
	};

	const [currStep, setCurrStep] = useState(1);

	const incCurrStepBy = (num) => {
		setCurrStep((prev) => prev + num);
	};

	const LoadCurrentStep = () => {
		if (currStep === 1)
			return (
				<Step1
					incCurrStepBy={incCurrStepBy}
					state={state}
					dispatch={dispatch}
				/>
			);
		else if (currStep === 2)
			return (
				<Step2
					incCurrStepBy={incCurrStepBy}
					state={state}
					dispatch={dispatch}
					employees={employees}
					changeEmployee={changeEmployee}
				/>
			);
		else if (currStep === 3)
			return (
				<Step3
					incCurrStepBy={incCurrStepBy}
					state={state}
                    employees={employees}
				/>
			);
		else if (currStep === 4) return <Step4 />;

		// return (
		// 	<Step2
		// 		incCurrStepBy={incCurrStepBy}
		// 		state={state}
		// 		dispatch={dispatch}
		//         employees={employees}
		//         changeEmployee={changeEmployee}
		// 	/>
		// );

	};

	return (
		<div
			className={`${
				props.startedForm ? "w-[60%]" : "w-[40%]"
			} h-full bg-orange-200 duration-1000 flex items-start justify-center overflow-scroll overflow-x-hidden`}
		>
			<div className="mt-32 px-60 w-full">
				{props.startedForm ? (
					<>
						<StepTitle currStep={currStep} />
						{ LoadCurrentStep() }
					</>
				) : (
					<GetStarted toggleStartedForm={props.toggleStartedForm} />
				)}
			</div>
		</div>
	);
};

export default RightBox;
