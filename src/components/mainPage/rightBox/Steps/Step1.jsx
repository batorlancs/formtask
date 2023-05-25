import React from "react";
import CompanyTextInput from "../formBox/inputs/CompanyTextInput";

const Step1 = (props) => {
	return (
		<div>
			<div className="flex flex-col gap-2">
                <CompanyTextInput
                    type="text"
                    placeholder="Company Name Example Kft."
                    label="Name"
                />
                <CompanyTextInput
                    type="email"
                    placeholder="example@company.com"
                    label="Email"
                />
            </div>
			<button
				className="px-12 py-4 bg-black bg-opacity-10 rounded-3xl mt-6"
				onClick={() => {
					props.incCurrStepBy(1);
				}}
			>
				Next
			</button>
		</div>
	);
};

export default Step1;
