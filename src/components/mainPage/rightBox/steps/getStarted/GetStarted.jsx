import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../../assets/animations/lottie-post.json";

const animStyle = {
	height: 300,
	width: 300,
};

export const GetStarted = (props) => {
	const { toggleStartedForm } = props;

	return (
		<div className="flex flex-row items-center overflow-hidden rounded-2xl bg-black bg-opacity-5 py-12 pl-12">
			<div>
				<h2 className="mt-6 text-3xl">
					Click here to fill in our form!
				</h2>
				<button
					className="mt-6 whitespace-nowrap rounded-2xl bg-custom-blue-dark px-12 py-4 text-lg font-bold text-white"
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
