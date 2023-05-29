import React from "react";

const LeftBox = (props) => {
	const { startedForm } = props;

	return (
		<div
			className={`${
				props.startedForm ? "w-[40%] max-xl:w-[20%] max-lg:hidden" : "w-[50%] max-xl:w-[40%] max-lg:hidden"
			} flex h-full justify-center overflow-hidden bg-[url('assets/shapes1.svg')] bg-cover px-32 pt-32 duration-1000 max-2xl:px-24 max-2xl:pt-24`}
		>
			<div className="flex flex-col gap-4 text-custom-purple">
				<h1 className="text-4xl font-bold max-2xl:text-3xl max-xl:text-2xl max-lg:hidden">
					Help us gather data to provide you countless helpful
					statistics.
				</h1>
				<p
					className={`${
						props.startedForm ? "opacity-0" : "opacity-100"
					} text-xl duration-1000 max-xl:hidden`}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
					in facere vel nisi possimus obcaecati labore quam sed porro,
					quidem doloremque eius accusantium eveniet! Enim ipsam in
					consequuntur odit totam.
				</p>
			</div>
		</div>
	);
};

export default LeftBox;
