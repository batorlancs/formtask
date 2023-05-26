import React from "react";

const CompanyTextInput = (props) => {
	const { type, placeholder, label, dispatch, actionType, error,  value } = props;

	return (
		<div className="">
			<h2 className="text-base mb-2">{label}</h2>
			<input
                value={value}
				type={type}
				placeholder={placeholder}
				onChange={(e) => {
					dispatch({ type: actionType, value: e.target.value });
				}}
				className={`${error !== "" ? "bg-red-500 bg-opacity-20" : "bg-black bg-opacity-5"} w-full rounded-2xl px-8 py-3 text-lg placeholder:text-black placeholder:text-opacity-30`}
			></input>
			{error !== "" && <p className="text-red-500 mt-2 float-right">{error}</p>}
		</div>
	);
};

export default CompanyTextInput;
