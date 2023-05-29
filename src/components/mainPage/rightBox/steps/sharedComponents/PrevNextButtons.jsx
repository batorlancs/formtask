import React from "react";
import LoadingAnimation from "../../../../../assets/animations/loading.svg";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const PrevNextButtons = (props) => {
	const {
		incCurrStepBy,
		isPrevious = false,
		isFinal = false,
		handleClick,
		isLoading = false,
	} = props;

	return (
		<div className="w-full mt-12 mb-12 grid grid-cols-2 gap-6">
			<div></div>
			<div className="grid grid-cols-2 gap-4">
				{isPrevious ? (
					<PrevButton incCurrStepBy={incCurrStepBy} />
				) : (
					<div></div>
				)}

				{isLoading ? (
					<div className="py-4 w-full rounded-2xl bg-red-400 font-bold text-white flex items-center justify-center">
						<img
							src={LoadingAnimation}
							className="invert h-8"
						></img>
					</div>
				) : (
					<NextButton isFinal={isFinal} handleClick={handleClick} />
				)}
			</div>
		</div>
	);
};

export default PrevNextButtons;
