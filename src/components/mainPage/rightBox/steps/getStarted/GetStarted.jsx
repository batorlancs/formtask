import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../../assets/animations/lottie-post.json";

/**
 * Style for Lottie animation
 */
const animStyle = {
	height: 300,
	width: 300,
};

/**
 * This component displays when opening the page at first, to let user start filling in the form
 */
export const GetStarted = (props) => {
	const { toggleStartedForm } = props;

	return (
		<div className="flex flex-row items-center overflow-hidden rounded-2xl bg-black bg-opacity-5 py-12 pl-12 max-2xl:py-4">
			<div>
				<h2 className="mt-6 text-3xl max-2xl:text-2xl">
					Click here to fill in our form!
				</h2>
				<button
					className="mt-6 whitespace-nowrap rounded-2xl bg-custom-blue-dark px-12 py-4 text-lg font-bold text-white max-2xl:px-8 max-2xl:py-3 max-2xl:text-base"
					onClick={toggleStartedForm}
				>
					Get Started
				</button>
			</div>
			<div className="">
				<Lottie animationData={animationData} style={animStyle} />
			</div>
		</div>
	);
};

export default GetStarted;
