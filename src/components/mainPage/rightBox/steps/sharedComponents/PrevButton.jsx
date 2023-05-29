import React from "react";

const PrevButton = (props) => {
	const { incCurrStepBy } = props;

	return (
		<button
			className="py-4 w-full rounded-2xl border-red-400 border-2 font-bold text-red-400"
			onClick={() => {
				incCurrStepBy(-1);
			}}
		>
			Previous
		</button>
	);
};

export default PrevButton;
