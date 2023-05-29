import React from "react";

/**
 * This component is a text input for the employee form.
 */
const EmployeeTextInput = (props) => {
    /**
     * index -> index in employees array
     * change -> name of the atribute to be changed in the employees
     * employee -> employee objects at employees[index]
     * changeEmployee -> function to overwrite employees array with object
     * type -> type of input
     * placeholder
     */
	const {
		index,
		change,
		employee,
		changeEmployee,
		type,
		placeholder,
	} = props;

    /**
     * when user is inputting, save data and remove error from employee form
     */
	const handleChange = (value) => {
		let temp = { ...employee };
		temp[change] = value;
		temp["error"] = "";
		changeEmployee(index, temp);
	};

	return (
        <input
            value={employee && employee[change]}
            type={type}
            placeholder={placeholder}
            onChange={(event) => {
                handleChange(event.target.value);
            }}
            className="bg-black bg-opacity-5 w-full rounded-2xl px-4 py-3 placeholder:text-black placeholder:text-opacity-30"
        ></input>
	);
};

export default EmployeeTextInput;
