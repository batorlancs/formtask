import React from "react";

export const GetStarted = (props) => {
	return (
        <div className="">
            <div className="h-[300px] w-full bg-white">icon?</div>
            <h2 className="text-4xl mt-6">Share company details with us!</h2>
            <button
                className="px-12 py-4 bg-black bg-opacity-10 rounded-3xl mt-6"
                onClick={props.toggleStartedForm}
            >Get Started</button>
        </div>
	);
};

export default GetStarted;
