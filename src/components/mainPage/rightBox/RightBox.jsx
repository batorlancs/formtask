import React, { useState} from "react";
import { GetStarted } from "./Steps/GetStarted";
import StepTitle from "./Steps/StepTitle";
import Step1 from "./Steps/Step1";

const RightBox = (props) => {

    const [currStep, setCurrStep] = useState(1);

    const incCurrStepBy = (num) => {
        setCurrStep(prev => prev+num);
    }

    const loadStep = () => {
        if (currStep === 1) return <Step1 incCurrStepBy={incCurrStepBy}/>
    }

	return (
		<div className={`${props.startedForm ? "w-[60%]" : "w-[40%]"} h-full bg-orange-200 duration-1000 flex items-start justify-center overflow-scroll scrollbar-none`}>
			<div className="mt-32 px-60 w-full">
                { props.startedForm ?
                    <>
                        <StepTitle currStep={currStep}/>
                        { loadStep() }
                    </>
                    :
                    <GetStarted toggleStartedForm={props.toggleStartedForm}/>
                }
            </div>
		</div>
	);
};

export default RightBox;
