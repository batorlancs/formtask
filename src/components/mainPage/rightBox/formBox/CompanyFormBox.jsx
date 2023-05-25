import React from "react";
import CompanyTextInput from "./inputs/CompanyTextInput";
import CompanyTextAreaInput from "./inputs/CompanyTextAreaInput";

const CompanyFormBox = () => {
	return (
        <div className="">
            <div className="mt-12 flex flex-col gap-6 justify-between">
                <CompanyTextInput type="text" placeholder="Company Name Example Kft." label="Name"/>
                <CompanyTextInput type="email" placeholder="example@company.com" label="Email"/>
                <CompanyTextInput type="text" placeholder="0" label="Number of Employees" />
                <CompanyTextAreaInput placeholder="Optional..." label="Description" />
			</div>
            
        </div>
    );
};

export default CompanyFormBox;
