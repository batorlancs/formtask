import React, { useState, useEffect, useRef } from "react";
import DropDownIcon from "../../../../../../../assets/icons/dropDownIcon.svg";

/**
 * All options of the drop down input
 */
const options = [
	"Accountant",
	"Software Developer",
	"Software Tester",
	"Manager",
];

/**
 * This component is a drop down text input for the employee form.
 */
const EmployeeDropDownInput = (props) => {
	const { index, change, employee, changeEmployee } = props;

    /**
     * Current option selected by the user ("Accountant" by default)
     */
	const [currOption, setCurrOption] = useState(employee[change]);

    /**
     * if dropDown true -> reveal dropdown input 
     */
	const [dropDown, setDropDown] = useState(false);
	const ref = useRef(null);

	const toggleDropDown = () => {
		setDropDown((prev) => !prev);
	};

    /**
     * Change the current selected option and store data in the main employees form
     * 
     * @param {string} newOption  
     */
	const changeCurrOption = (newOption) => {
		toggleDropDown();
		// store data in json
		let temp = { ...employee };
		temp[change] = newOption;
		changeEmployee(index, temp);
		//
		setCurrOption(newOption);
	};

	/**
     * This function hides the drop down input when the user clicks somewhere else
     */
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setDropDown(false);
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<div ref={ref}>
			<div className="relative">
				<button
					onClick={toggleDropDown}
					className="flex w-full cursor-pointer flex-row justify-between rounded-2xl bg-black bg-opacity-5 px-4 py-3 max-2xl:text-sm"
				>
					<p>{currOption}</p>
					<img
						className={`h-6 rounded-full bg-black bg-opacity-10 duration-500`}
						src={DropDownIcon}
					></img>
				</button>
				{dropDown && (
					<ul className="absolute top-[0px] z-10 w-full rounded-2xl bg-white p-4 shadow-xl backdrop-blur-xl max-2xl:text-sm">
						{options.map((item) => (
							<li
								key={item}
								className="cursor-pointer rounded-2xl px-4 py-3 opacity-40 hover:bg-black hover:bg-opacity-5 hover:opacity-100"
								onClick={() => {
									changeCurrOption(item);
								}}
							>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default EmployeeDropDownInput;
