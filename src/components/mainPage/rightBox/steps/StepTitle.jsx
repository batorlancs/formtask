import React, { useEffect } from "react";

const stepTitles = [
	"Get Started",
	"Company Details",
	"Employee Details",
	"Verfify Details",
	"Thank you",
];
const totalNumOfSteps = 4;

const StepTitle = (props) => {
	return (
		<div className="w-full mb-12">
			<h1 className="text-3xl font-bold mb-4">
				{stepTitles[props.currStep]}
			</h1>
			<div className="w-full h-3 flex flex-row gap-2 justify-between">
				{[...Array(props.currStep)].map((e, i) => (
					<div
						key={i}
						className="w-full h-full bg-red-400 rounded-full"
					></div>
				))}
				{[...Array(totalNumOfSteps - props.currStep)].map((e, i) => (
					<div
						key={i}
						className="w-full h-full bg-black bg-opacity-5 rounded-full"
					></div>
				))}
			</div>
		</div>
	);
};

export default StepTitle;
