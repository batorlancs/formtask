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
		<div className="bg-black bg-opacity-5 rounded-2xl flex flex-row pl-12 items-center">
			<div>
				<h2 className="text-3xl mt-6">
					Click here to fill out our form!
				</h2>
				<button
					className="px-12 py-4 bg-custom-blue-dark font-bold text-lg text-white rounded-2xl mt-6"
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
