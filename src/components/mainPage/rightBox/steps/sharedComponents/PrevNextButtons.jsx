import React from "react";

const PrevNextButtons = (props) => {
	const { incCurrStepBy, previous, next, isSubmit, isFinal, handleNext } = props;

	return (
		<div className="w-full mt-12 mb-12 flex justify-end">
			<div className="flex flex-row gap-4">
				{previous && (
					<button
						className="py-4 w-[150px] rounded-2xl border-red-400 border-2 font-bold text-red-400"
						onClick={() => {
							incCurrStepBy(-1);
						}}
					>
						Previous
					</button>
				)}
				{next && isSubmit === true ? (
					<button
						type="submit"
						className="py-4 w-[150px] rounded-2xl bg-red-400 font-bold text-white"
					>
						{isFinal && isFinal === true ? "Submit" : "Next"}
					</button>
				) : (
					<button
						onClick={handleNext}
						className="py-4 w-[150px] rounded-2xl bg-red-400 font-bold text-white"
					>
						{isFinal && isFinal === true ? "Submit" : "Next"}
					</button>
				)}
			</div>
		</div>
	);
};

export default PrevNextButtons;
