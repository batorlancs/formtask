import React from "react";
import DataRowElement from "./DataRowElement";

/**
 * Used to convert keys of the object to Label names
 */
const alias = {
	name: "Name",
	email: "Email",
	numOfEmp: "Number of employees",
	description: "Description",
};

/**
 * This component is used to display company data in a table
 */
const CompanyPreview = (props) => {
	const { company } = props;

	return (
		<div className="rounded-2xl bg-black bg-opacity-5 px-8 py-6">
			{Object.keys(company).map((key) => (
				<DataRowElement
					key={key}
					title={alias[key]}
					value={company[key].value}
				/>
			))}
		</div>
	);
};

export default CompanyPreview;
