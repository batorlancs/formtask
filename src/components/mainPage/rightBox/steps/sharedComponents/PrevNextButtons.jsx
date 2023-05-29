import React from "react";
import LoadingAnimation from "../../../../../assets/animations/loading.svg";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

/**
 * This component renders a previous and next button based on the passed in props
 */
const PrevNextButtons = (props) => {
    /**
     * isPrevious -> if true renders previous button
     * isFinal -> next button displays "Submit" instead of "Next"
     * handleClick -> function to handle "Next button" click, if handleClick undefined it renders type='submit' button
     * isLoading -> if Loading render loading icon on next button
     */
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
