import React from "react";

const CompanyTextAreaInput = (props) => {
	const { value, placeholder, label, dispatch, actionType } = props;

	return (
		<div className="">
			<h2 className="mb-2 text-base">{label}</h2>
			<textarea
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					dispatch({ type: actionType, value: e.target.value });
				}}
				className="h-40 w-full resize-none rounded-2xl bg-black bg-opacity-5 px-8 py-3 text-lg scrollbar-none placeholder:text-black placeholder:text-opacity-40"
			></textarea>
		</div>
	);
};

export default CompanyTextAreaInput;
