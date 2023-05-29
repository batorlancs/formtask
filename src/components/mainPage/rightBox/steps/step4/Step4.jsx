import React, { useState, useRef } from "react";
import { db } from "../../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingAnimation from "../../../../../assets/animations/loading.svg";

/**
 * This component is Step 4 of the form process, which gives an oppurtonity fetch the uploaded data from the firebase cloud.
 *
 * @param {*} props firebaseID
 */
const Step4 = (props) => {
	const { firebaseID } = props;
	const [isLoading, setIsLoading] = useState(false);
	const linkRef = useRef(null);

	/**
	 * This function handles the download click, connects and fetches data from firebase and converts it into an object
	 *
	 * @returns
	 */
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

		console.log(result);
		downloadJson(result);
		setIsLoading(false);
	};

	/**
	 * This function takes an object and downloads it for the user in JSON
	 *
	 * @param {object} JsonData fetched data from firebase to download
	 */
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
			<div className="text-3xl font-bold">
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
				className="mt-12 flex h-14 w-[250px] items-center justify-center rounded-2xl bg-custom-blue-dark font-bold text-white"
				onClick={handleClick}
			>
				{isLoading ? (
					<img
						src={LoadingAnimation}
						className="h-8 opacity-60 invert"
					></img>
				) : (
					"Download Data in JSON"
				)}
			</button>
			<a className="hidden" ref={linkRef}></a>
		</div>
	);
};

export default Step4;
