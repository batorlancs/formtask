import React, { useState } from "react";
import CheckIcon from "../../../../../../../assets/icons/checkIcon.svg";

/**
 * This component is a file input for the employee form.
 */
const EmployeeFileInput = (props) => {
	const { index, change, employee, changeEmployee } = props;

    /**
     * Inputted file by the user (null by default)
     */
	const [file, setFile] = useState(employee[change]);
    /**
     * Hovering will display the file name if file not null
     */
	const [isHover, setIsHover] = useState(false);

    /**
     * When inputting a new file, save the data in the main form
     */
	const handleFileChange = (event) => {
		const f = event.target.files[0];

		if (f && f.type === "application/pdf") {
			// save data
			let temp = { ...employee };
			temp[change] = f;
			temp["error"] = "";
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
				className="flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-black bg-opacity-10 px-4"
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
					className="hidden h-full w-full"
					onChange={handleFileChange}
					accept=".pdf"
				></input>
			</label>
			{isHover && file && (
				<div>
					<div className="ml-10 mt-1 h-0 w-0 border-x-[20px] border-b-[20px] border-white border-x-transparent"></div>
					<div className="absolute top-16 whitespace-nowrap rounded-2xl bg-white px-4 py-3 text-xs shadow-xl backdrop-blur-xl">
						{file ? file.name : "Select .pdf file"}
					</div>
				</div>
			)}
		</div>
	);
};

export default EmployeeFileInput;
