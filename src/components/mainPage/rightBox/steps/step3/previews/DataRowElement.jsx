import React from "react";

const DataRowElement = (props) => {
	const { title, value } = props;

	return (
		<div className="grid grid-cols-2 text-lg">
			<h2 className="font-bold">{title}:</h2>
			<p>{value === "" ? "-" : value}</p>
		</div>
	);
};

export default DataRowElement;
