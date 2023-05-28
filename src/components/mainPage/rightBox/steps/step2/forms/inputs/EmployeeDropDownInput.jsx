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
					className="w-full py-4 px-8 rounded-2xl bg-black bg-opacity-5 flex flex-row justify-between cursor-pointer"
				>
					<p>{currOption}</p>
					<img
						className={`bg-black bg-opacity-10 rounded-full h-6 duration-500`}
						src={DropDownIcon}
					></img>
				</button>
				{dropDown && (
					<ul className="absolute z-10 top-[70px] bg-black bg-opacity-5 backdrop-blur-xl w-full p-4 rounded-2xl">
						{options.map((item) => (
							<li
								key={item}
								className="py-3 px-4 opacity-40 hover:bg-black hover:bg-opacity-5 hover:opacity-100 cursor-pointer rounded-2xl"
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
