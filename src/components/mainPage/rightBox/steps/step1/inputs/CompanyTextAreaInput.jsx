import React from "react";

/**
 * This component is text area input in the company form
 *  -> on each change, it saves changes to company
 *  -> does not handle errors
 */
const CompanyTextAreaInput = (props) => {
	/**
	 * value -> value of input field
	 * placeholder
	 * label -> display text above the input field
	 * dispatchCompany -> save changes to company form
	 * actionType -> what type of action to call for dispatchCompany
	 */
	const { value, placeholder, label, dispatchCompany, actionType } = props;

	return (
		<div className="">
			<h2 className="mb-2 text-base">{label}</h2>
			<textarea
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					dispatchCompany({
						type: actionType,
						value: e.target.value,
					});
				}}
				className="h-40 w-full resize-none rounded-2xl bg-black bg-opacity-5 px-8 py-3 text-lg scrollbar-none placeholder:text-black placeholder:text-opacity-40 max-2xl:h-24 max-2xl:text-base"
			></textarea>
		</div>
	);
};

export default CompanyTextAreaInput;
