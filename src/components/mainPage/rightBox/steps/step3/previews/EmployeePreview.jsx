import React from "react";
import DataRowElement from "./DataRowElement";

/**
 * Used to convert keys of the object to Label names
 */
const alias = {
	name: "Full Name",
	email: "Email",
	jobTitle: "Job Title",
	age: "Age",
};

/**
 * This component displays the data of one employee in the array in a table
 */
const EmployeePreview = (props) => {
	const { employee, index, numOfEmp } = props;

	return (
		<div>
			<div className="rounded-2xl bg-black bg-opacity-5">
				<h1 className="rounded-t-2xl bg-black bg-opacity-5 px-8 py-3 text-xl font-bold">
					<span className="text-custom-blue-dark">{index + 1}</span> /{" "}
					{numOfEmp}
				</h1>
				<div className="px-8 pb-6 pt-4">
					{Object.keys(employee).map((key) => {
						if (key === "error") return;

						if (key === "CV") {
							return (
								<DataRowElement
									key={key}
									title="CV"
									value={
										employee[key]
											? employee[key].name
											: "null"
									}
								/>
							);
						}

						return (
							<DataRowElement
								key={key}
								title={alias[key]}
								value={employee[key]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EmployeePreview;
