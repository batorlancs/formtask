import React from "react";

const CompanyTextInput = (props) => {
	const { value, type, placeholder, label, dispatch, actionType, error } =
		props;

	return (
		<div className="">
			<h2 className="mb-2 text-base">{label}</h2>
			<input
				value={value}
				type={type}
				inputMode={type === "number" ? "numeric" : ""}
				placeholder={placeholder}
				onChange={(e) => {
					dispatch({ type: actionType, value: e.target.value });
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
