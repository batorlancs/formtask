import React from "react";

const CompanyTextAreaInput = (props) => {
	const { placeholder, label } = props;

	return (
		<div className="">
			<h2 className="text-xl mb-2">{label}</h2>
			<textarea
				placeholder={placeholder}
				className="h-40 w-full rounded-2xl bg-black bg-opacity-5 px-8 py-4 text-xl placeholder:text-black placeholder:text-opacity-40 resize-none scrollbar-none"
			></textarea>
		</div>
	);
};

export default CompanyTextAreaInput;
