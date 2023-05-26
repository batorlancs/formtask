import React from "react";

const CompanyTextAreaInput = (props) => {
	const { placeholder, label, dispatch, actionType } = props;

	return (
		<div className="">
			<h2 className="text-base mb-2">{label}</h2>
			<textarea
				placeholder={placeholder}
                onChange={(e) => {
					dispatch({ type: actionType, value: e.target.value });
				}}
				className="h-40 w-full rounded-2xl bg-black bg-opacity-5 px-8 py-3 text-lg placeholder:text-black placeholder:text-opacity-40 resize-none scrollbar-none"
			></textarea>
		</div>
	);
};

export default CompanyTextAreaInput;
