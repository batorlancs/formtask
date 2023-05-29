import React, { useState, useRef } from "react";
import { db } from "../../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingAnimation from "../../../../../assets/animations/loading.svg";

const Step4 = (props) => {
	const { firebaseID } = props;
	const [isLoading, setIsLoading] = useState(false);
	const linkRef = useRef(null);

	const handleClick = async () => {
        setIsLoading(true);
		let result = {};
		let employees = [];
		const companyRef = doc(db, "companies", firebaseID);
		const companySnap = await getDoc(companyRef);
		if (!companySnap.exists()) return;

		result = { ...companySnap.data() };

		for (let index = 0; index < result.numOfEmp; index++) {
			let employeeRef = doc(
				db,
				`companies/${firebaseID}/employees`,
				index.toString()
			);
			let employeeSnap = await getDoc(employeeRef);
			if (!employeeSnap.exists()) break;
			employees = [...employees, employeeSnap.data()];
		}

		result = {
			...result,
			employees: employees,
		};

		// console.log(result);
		downloadJson(result);
        setIsLoading(false);
	};

	const downloadJson = (JsonData) => {
		const data = JSON.stringify(JsonData);
		const blob = new Blob([data], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		if (linkRef.current) {
			linkRef.current.href = url;
			linkRef.current.download = "company_data.json";
			linkRef.current.click();
		}
		URL.revokeObjectURL(url);
	};

	return (
		<div>
			<div className="font-bold text-3xl">
				Thank you for your submission!
			</div>
			<p className="mt-6 text-lg">
				Your data has been uploaded to a firestore cloud database, which
				you can only access now by clicking the 'Download Data in JSON'
				button. If you leave this page you will not have access to the
				data anymore. Thank you for taking the time to fill out this
				form!
			</p>
			<button
				className="bg-custom-blue-dark text-white w-[250px] h-14 font-bold rounded-2xl mt-12 flex items-center justify-center"
				onClick={handleClick}
			>
				{!isLoading && "Download Data in JSON"}
                <img src={LoadingAnimation} className={`${!isLoading && "hidden"} invert h-8 opacity-60`}></img>
			</button>
			<a className="hidden" ref={linkRef}></a>
		</div>
	);
};

export default Step4;
