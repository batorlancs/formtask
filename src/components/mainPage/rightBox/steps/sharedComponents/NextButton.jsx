import React from "react";

const NextButton = (props) => {
	const { isFinal, handleClick } = props;

	return (
		<>
			{typeof handleClick === "undefined" ? (
				<button
					type="submit"
					className="w-full rounded-2xl bg-custom-blue-dark font-bold text-white flex items-center justify-center"
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