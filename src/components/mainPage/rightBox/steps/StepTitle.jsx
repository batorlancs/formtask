import React from "react";

/**
 *  This variable contains the name of each step.
 */
const stepTitles = [
	"Get Started",
	"Company Details",
	"Employee Details",
	"Verify Details",
	"Complete",
];
const totalNumOfSteps = 4;

/**
 * This component displays the name of the current step and how many steps in is the user from total number of steps
 */
const StepTitle = (props) => {
	const { currStep } = props;

	return (
		<div className="mb-12 w-full">
			<h1 className="mb-4 text-3xl font-bold">{stepTitles[currStep]}</h1>
			<div className="flex h-3 w-full flex-row justify-between gap-2">
				{[...Array(currStep)].map((e, i) => (
					<div
						key={i}
						className="h-full w-full rounded-full bg-custom-blue-dark"
					></div>
				))}
				{/**
				 * Do not display anything if currStep reached totalNumOfSteps
				 */}
				{currStep < totalNumOfSteps &&
					[...Array(totalNumOfSteps - currStep)].map((e, i) => (
						<div
							key={i}
							className="h-full w-full rounded-full bg-black bg-opacity-5"
						></div>
					))}
			</div>
		</div>
	);
};

export default StepTitle;
