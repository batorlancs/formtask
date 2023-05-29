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
		<div className="mb-12 mt-12 grid h-14 w-full grid-cols-2 gap-6">
			<div></div>
			<div className="grid grid-cols-2 gap-4">
				{isPrevious ? (
					<PrevButton incCurrStepBy={incCurrStepBy} />
				) : (
					<div></div>
				)}

				{isLoading ? (
					<div className="flex w-full items-center justify-center rounded-2xl bg-custom-blue-dark font-bold text-white">
						<img
							src={LoadingAnimation}
							className="h-8 opacity-60 invert"
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
