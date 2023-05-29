import React from "react";
import DataRowElement from "./DataRowElement";

const alias = {
	name: "Full Name",
	email: "Email",
	jobTitle: "Job Title",
	age: "Age",
};

const EmployeePreview = (props) => {
	const { employee, index, numOfEmp } = props;

	return (
		<div>
			<div className="bg-black bg-opacity-5 rounded-2xl">
				<h1 className="text-xl px-8 py-3 font-bold rounded-t-2xl bg-black bg-opacity-5">
					<span className="text-custom-blue-dark">{index + 1}</span> / {numOfEmp}
				</h1>
				<div className="px-8 pt-4 pb-6">
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
