import React from "react";

/**
 * Next Button
 * -> render type="submit" button if handleClick is undefined
 * -> render normal button calling handleClick if handleClick is defined
 */
const NextButton = (props) => {
	const { isFinal, handleClick } = props;

	return (
		<>
			{typeof handleClick === "undefined" ? (
				<button
					type="submit"
					className="flex w-full items-center justify-center rounded-2xl bg-custom-blue-dark font-bold text-white"
				>
					{isFinal === true ? "Submit" : "Next"}
				</button>
			) : (
				<button
					onClick={handleClick}
					className="w-full rounded-2xl bg-custom-blue-dark font-bold text-white"
				>
					{isFinal === true ? "Submit" : "Next"}
				</button>
			)}
		</>
	);
};

export default NextButton;
