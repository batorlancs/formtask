import React from "react";

const LeftBox = (props) => {
    const { startedForm } = props;

	return (
		<div className={`${props.startedForm ? "w-[40%]" : "w-[60%]"} h-full bg-[url('assets/shapes1.svg')] bg-cover duration-1000 flex justify-center px-32 pt-32`}>
			<div className="flex flex-col gap-4 text-custom-purple">
                <h1 className="text-4xl font-bold">Help us gather data to provide you countless helpful statistics.</h1>
                <p className={`${props.startedForm ? "opacity-0" : "opacity-100"} text-xl duration-1000`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea in facere vel nisi possimus obcaecati labore quam sed porro, quidem doloremque eius accusantium eveniet! Enim ipsam in consequuntur odit totam.</p>
            </div>
		</div>
	);
};

export default LeftBox;
