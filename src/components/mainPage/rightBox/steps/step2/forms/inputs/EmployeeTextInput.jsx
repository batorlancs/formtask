import React from "react";

const EmployeeTextInput = (props) => {
	const {
		index,
        change,
		employees,
		changeEmployee,
		type,
		placeholder,
		error,
	} = props;

	const handleChange = (value) => {
		let temp = { ...employees[index] };
		temp[change] = value;
		changeEmployee(index, temp);
	};

	return (
		<div className="">
			<input
                value={employees[index] && employees[index][change]}
				type={type}
				placeholder={placeholder}
				onChange={(event) => {
					handleChange(event.target.value);
				}}
				className={`${
					error !== ""
						? "bg-red-500 bg-opacity-20"
						: "bg-black bg-opacity-5"
				}  w-full rounded-2xl px-8 py-3 text-lg placeholder:text-black placeholder:text-opacity-30`}
			></input>
			{error !== "" && (
				<p className="text-red-500 mt-2 float-right">{error}</p>
			)}
		</div>
	);
};

export default EmployeeTextInput;
