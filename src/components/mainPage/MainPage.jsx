import React, { useState } from "react";
import RightBox from "./rightBox/RightBox";
import LeftBox from "./leftBox/LeftBox";

const MainPage = () => {

    const [startedForm, setStartedForm] = useState(false);

    const toggleStartedForm = () => {
        setStartedForm(prev => !prev);
    }

	return (
		<div>
			<div className="h-screen w-screen flex flex-row font-custom">
                <LeftBox startedForm={startedForm} />
                <RightBox startedForm={startedForm} toggleStartedForm={toggleStartedForm} />
            </div>
		</div>
	);
};

export default MainPage;
