import React from "react";

/**
 * This component is displays one row of data (2 columns)
 * -> title (object key), value
 */
const DataRowElement = (props) => {
	const { title, value } = props;

	return (
		<div className="grid grid-cols-2 text-lg ">
			<h2 className="font-bold">{title}:</h2>
			<p className="overflow-hidden text-ellipsis">
				{value === "" ? "-" : value}
			</p>
		</div>
	);
};

export default DataRowElement;
