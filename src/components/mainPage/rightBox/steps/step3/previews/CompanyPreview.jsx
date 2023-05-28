import React from "react";
import DataRowElement from "./DataRowElement";

const alias = {
	name: "Name",
	email: "Email",
	numOfEmp: "Number of employees",
	description: "Description",
};

const CompanyPreview = (props) => {
	const { state } = props;

	return (
		<div className="bg-black bg-opacity-5 rounded-2xl px-8 py-6">
            {Object.keys(state).map((key) => (
                <DataRowElement
                    title={alias[key]}
                    value={state[key].value}
                />
            ))}
		</div>
	);
};

export default CompanyPreview;
