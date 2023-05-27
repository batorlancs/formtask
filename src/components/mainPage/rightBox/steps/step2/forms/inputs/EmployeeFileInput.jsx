import React, { useState } from "react";
import CheckIcon from "../../../../../../../assets/icons/checkIcon.svg";

const EmployeeFileInput = (props) => {
	const { index, change, employees, changeEmployee } = props;

	const [file, setFile] = useState(employees[index][change]);
	const [isHover, setIsHover] = useState(false);

	const handleFileChange = (event) => {
		const f = event.target.files[0];

		if (f && f.type === "application/pdf") {
            // save data
            let temp = { ...employees[index] };
            temp[change] = f;
            changeEmployee(index, temp);
            //
			setFile(f);
            setIsHover(false);
		} else {
			alert("Please select a PDF file!");
		}
	};

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<div className="relative">
			<label
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="w-full h-full bg-black bg-opacity-10 rounded-2xl flex items-center justify-center cursor-pointer px-4 overflow-hidden"
			>
				{file ? (
					<div className="flex flex-row items-center justify-center gap-2">
                        <p>CV</p>
                        <img src={CheckIcon} className="h-6"></img>
                    </div>
				) : (
					<p className="">Import CV</p>
				)}
				<input
					type="file"
					className="hidden w-full h-full"
					onChange={handleFileChange}
					accept=".pdf"
				></input>
			</label>
			{isHover && file && (
				<div className="absolute top-16 bg-black bg-opacity-5 backdrop-blur-xl py-4 px-4 text-xs rounded-2xl whitespace-nowrap">
					{file ? file.name : "Select .pdf file"}
				</div>
			)}
		</div>
	);
};

export default EmployeeFileInput;
