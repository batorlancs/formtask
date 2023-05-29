import React, { useState, useEffect, useRef } from "react";
import DropDownIcon from "../../../../../../../assets/icons/dropDownIcon.svg";

const options = [
	"Accountant",
	"Software Developer",
	"Software Tester",
	"Manager",
];

const EmployeeDropDownInput = (props) => {
	const { index, change, employee, changeEmployee } = props;

	const [currOption, setCurrOption] = useState(employee[change]);
	const [dropDown, setDropDown] = useState(false);
	const ref = useRef(null);

	const toggleDropDown = () => {
		setDropDown((prev) => !prev);
	};

	const changeCurrOption = (newOption) => {
		toggleDropDown();
		// store data in json
		let temp = { ...employee };
		temp[change] = newOption;
		changeEmployee(index, temp);
		//
		setCurrOption(newOption);
	};

	// when clicking outside hide drop down
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
					className="flex w-full cursor-pointer flex-row justify-between rounded-2xl bg-black bg-opacity-5 px-4 py-3"
				>
					<p>{currOption}</p>
					<img
						className={`h-6 rounded-full bg-black bg-opacity-10 duration-500`}
						src={DropDownIcon}
					></img>
				</button>
				{dropDown && (
					<ul className="absolute top-[0px] z-10 w-full rounded-2xl bg-white p-4 shadow-xl backdrop-blur-xl">
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
