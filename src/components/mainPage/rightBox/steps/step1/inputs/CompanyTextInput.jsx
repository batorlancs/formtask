import React from "react";

/**
 * This component is text input in the company form
 *  -> on each change, it saves changes to company
 */
const CompanyTextInput = (props) => {

    /**
     * value -> value of input field
     * type -> type of input field
     * placeholder
     * label -> display text above the input field
     * dispatchCompany -> save changes to company form
     * actionType -> what type of action to call for dispatchCompany
     * error -> validation result
     */
	const {
		value,
		type,
		placeholder,
		label,
		dispatchCompany,
		actionType,
		error,
	} = props;

	return (
		<div className="">
			<h2 className="mb-2 text-base">{label}</h2>
			<input
				value={value}
				type={type}
				inputMode={type === "number" ? "numeric" : ""}
				placeholder={placeholder}
				onChange={(e) => {
					dispatchCompany({
						type: actionType,
						value: e.target.value,
					});
				}}
				className={`${
					error !== ""
						? "bg-red-500 bg-opacity-20"
						: "bg-black bg-opacity-5"
				} w-full rounded-2xl px-8 py-3 text-lg placeholder:text-black placeholder:text-opacity-30`}
			></input>
			{error !== "" && (
				<p className="float-right mt-2 text-red-500">{error}</p>
			)}
		</div>
	);
};

export default CompanyTextInput;
