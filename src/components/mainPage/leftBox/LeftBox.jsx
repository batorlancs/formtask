import React from "react";

const LeftBox = (props) => {

	return (
		<div className={`${props.startedForm ? "w-[40%]" : "w-[60%]"} h-full duration-1000 bg-orange-300 flex justify-center px-32 pt-32`}>
			<div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Help us gather data to provide you countless helpful statistics.</h1>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea in facere vel nisi possimus obcaecati labore quam sed porro, quidem doloremque eius accusantium eveniet! Enim ipsam in consequuntur odit totam.</p>
            </div>
		</div>
	);
};

export default LeftBox;
