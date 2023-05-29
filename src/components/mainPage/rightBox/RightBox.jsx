import React, { useReducer, useState, useEffect, useRef } from "react";
import { GetStarted } from "./steps/getStarted/GetStarted";
import StepTitle from "./steps/StepTitle";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";

/**
 * Reducer function to change the data in the useReducer variable
 *
 * @param {*} company useReducer variable
 * @param {*} action passed in actions to the hook (type, value)
 */
const reducer = (company, action) => {
	switch (action.type) {
		case "name":
			return { ...company, name: { value: action.value, error: "" } };
		case "email":
			return { ...company, email: { value: action.value, error: "" } };
		case "numOfEmp":
			// if input is a number or would be incorrect input (1-100) it does not change
			if (isNaN(action.value) || action.value.includes(" "))
				return { ...company };
			let num = parseInt(action.value);
			if (num > 100 || num < 1) return { ...company };
			else
				return {
					...company,
					numOfEmp: { value: action.value, error: "" },
				};
		case "description":
			return { ...company, description: { value: action.value } };
		//errors
		case "nameError":
			return {
				...company,
				name: { ...company.name, error: action.value },
			};
		case "emailError":
			return {
				...company,
				email: { ...company.email, error: action.value },
			};
		case "numOfEmpError":
			return {
				...company,
				numOfEmp: { ...company.numOfEmp, error: action.value },
			};
		default:
			return company;
	}
};

/**
 * This component handles the form on the right side of the page, and gathers the data here from all of the steps
 */
const RightBox = (props) => {
	const { startedForm, toggleStartedForm } = props;
	/**
	 * When object is uploaded the firebase, this will store the id of that document (if empty it has not been stored yet)
	 */
	const [firebaseID, setFirebaseID] = useState("");

    /**
     * Company data, for each input --> value, error 
     * if error is not "", it will display the error under the input
     */
	const [company, dispatchCompany] = useReducer(reducer, {
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

    /**
     * Array of Employee data to store each employee form created
     */
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

    /**
     * This function populates the employees with "empty" values until it reaches the passed length
     * 
     * @param {number} length new employees array length
     */
	const populateEmployees = (length) => {
		let employeeData = {
			name: "",
			email: "",
			jobTitle: "Accountant",
			age: "",
			CV: null,
			error: "",
		};
		for (let i = 0; i < length - employees.length; i++) {
			setEmployees((prev) => [...prev, employeeData]);
		}
	};

    /**
     * Populate employees each time the numOfEmp value changes in companyData
     */
	useEffect(() => {
		populateEmployees(company.numOfEmp.value);
	}, [company.numOfEmp.value]);

    /**
     * This function overwrites an employee at the given index to the given object in the employees array
     * 
     * @param {number} index the index of employee to overwrite
     * @param {object} employee new employeeData object to overwrite
     */
	const changeEmployee = (index, employee) => {
		setEmployees((prev) => {
			let temp = [...prev];
			temp[index] = employee;
			return temp;
		});
	};

    /**
     * This variable keeps track of the current Step the user is in when filling in the form
     */
	const [currStep, setCurrStep] = useState(1);

	const incCurrStepBy = (num) => {
		setCurrStep((prev) => prev + num);
	};

	const rightBoxRef = useRef(null);

    /**
     * Each time the user clicks next or previous (either forwards or backwards) scroll to the top of the component
     */
	useEffect(() => {
		if (rightBoxRef.current)
			rightBoxRef.current.scrollIntoView({ block: "start" });
	}, [currStep]);

    /**
     * This function returns the correct component based on the current step the user is at
     * 
     * @returns component based on currStep
     */
	const LoadCurrentStep = () => {
		if (currStep === 1)
			return (
				<Step1
					incCurrStepBy={incCurrStepBy}
					company={company}
					dispatchCompany={dispatchCompany}
				/>
			);
		else if (currStep === 2)
			return (
				<Step2
					incCurrStepBy={incCurrStepBy}
					company={company}
					dispatchCompany={dispatchCompany}
					employees={employees}
					changeEmployee={changeEmployee}
					rightBoxRef={rightBoxRef}
				/>
			);
		else if (currStep === 3)
			return (
				<Step3
					incCurrStepBy={incCurrStepBy}
					company={company}
					employees={employees}
					setFirebaseID={setFirebaseID}
				/>
			);
		else if (currStep === 4) return <Step4 firebaseID={firebaseID} />;
	};

	return (
		<div
			className={`${
				props.startedForm ? "w-[60%]" : "w-[50%]"
			} flex h-full items-start justify-center overflow-scroll overflow-x-hidden bg-neutral-100 duration-1000`}
		>
			<div
				className={`w-full max-w-[800px] px-20 pt-32`}
				ref={rightBoxRef}
			>
				{startedForm ? (
					<>
						<StepTitle currStep={currStep} />
						{LoadCurrentStep()}
					</>
				) : (
					<GetStarted toggleStartedForm={toggleStartedForm} />
				)}
			</div>
		</div>
	);
};

export default RightBox;
