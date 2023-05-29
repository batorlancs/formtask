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
			<div className="flex h-screen w-screen flex-row font-custom">
				<LeftBox startedForm={startedForm} />
				<RightBox
					startedForm={startedForm}
					toggleStartedForm={toggleStartedForm}
				/>
			</div>
		</div>
	);
};

export default MainPage;
