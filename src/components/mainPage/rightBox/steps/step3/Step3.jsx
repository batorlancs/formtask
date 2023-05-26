import React from "react";
import PrevNextButtons from "../sharedComponents/PrevNextButtons";

const Step3 = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.incCurrStepBy(1);
    }

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<PrevNextButtons incCurrStepBy={props.incCurrStepBy} previous={true} next={true} isSubmit={true}/>
		</form>
	);
};

export default Step3;
