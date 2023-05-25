import React from "react";

const CompanyTextInput = (props) => {
	const { type, placeholder, label } = props;

	return (
		<div className="">
			<h2 className="text-base mb-2">{label}</h2>
			<input
				type={type}
				placeholder={placeholder}
				className="w-full rounded-2xl bg-black bg-opacity-5 px-8 py-3 text-lg placeholder:text-black placeholder:text-opacity-40"
			></input>
		</div>
	);
};

export default CompanyTextInput;
