import React from "react";

const PrevButton = (props) => {
	const { incCurrStepBy } = props;

	return (
		<button
			className="w-full rounded-2xl border-custom-blue-dark border-2 font-bold text-custom-blue-dark"
			onClick={() => {
				incCurrStepBy(-1);
			}}
		>
			Previous
		</button>
	);
};

export default PrevButton;
