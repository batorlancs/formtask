import React from "react";

const EmployeeTextInput = (props) => {
	const {
		index,
		change,
		employee,
		changeEmployee,
		type,
		placeholder,
		error,
	} = props;

	const handleChange = (value) => {
		let temp = { ...employee };
		temp[change] = value;
		temp["error"] = "";
		changeEmployee(index, temp);
	};

	return (
		<div className="">
			<input
				value={employee && employee[change]}
				type={type}
				placeholder={placeholder}
				onChange={(event) => {
					handleChange(event.target.value);
				}}
				className={`${
					error !== ""
						? "bg-red-500 bg-opacity-20"
						: "bg-black bg-opacity-5"
				}  w-full rounded-2xl px-4 py-3 placeholder:text-black placeholder:text-opacity-30`}
			></input>
			{error !== "" && (
				<p className="float-right mt-2 text-red-500">{error}</p>
			)}
		</div>
	);
};

export default EmployeeTextInput;
