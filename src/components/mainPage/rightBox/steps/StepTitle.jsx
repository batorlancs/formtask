import React from "react";

const stepTitles = [
	"Get Started",
	"Company Details",
	"Employee Details",
	"Verify Details",
	"Complete",
];
const totalNumOfSteps = 4;

const StepTitle = ({ currStep }) => {

	return (
		<div className="w-full mb-12">
			<h1 className="text-3xl font-bold mb-4">
				{stepTitles[currStep]}
			</h1>
			<div className="w-full h-3 flex flex-row gap-2 justify-between">
				{[...Array(currStep)].map((e, i) => (
					<div
						key={i}
						className="w-full h-full bg-custom-blue-dark rounded-full"
					></div>
				))}
				{(currStep < totalNumOfSteps) && [...Array(totalNumOfSteps - currStep)].map((e, i) => (
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
