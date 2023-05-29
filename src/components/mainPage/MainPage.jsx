import React, { useState } from "react";
import RightBox from "./rightBox/RightBox";
import LeftBox from "./leftBox/LeftBox";

/**
 * This component is the main (and only) page holding all the components
 */
const MainPage = () => {
    /**
     * Indicates wether the user has clicked on start
     */
	const [startedForm, setStartedForm] = useState(false);

	const toggleStartedForm = () => {
		setStartedForm((prev) => !prev);
	};

	return (
		<div>
			<div className="h-screen w-screen font-custom flex items-center justify-center">
				<div className="h-full w-full max-w-[2400px] flex flex-row max-sm:hidden">
                    <LeftBox startedForm={startedForm} />
                    <RightBox
                        startedForm={startedForm}
                        toggleStartedForm={toggleStartedForm}
                    />
                </div>
                <div className="sm:hidden p-12">
                    Sorry, This page is not suitable for mobile. Please visit this website on a device with a bigger screen to get access.
                </div>
			</div>
		</div>
	);
};

export default MainPage;
