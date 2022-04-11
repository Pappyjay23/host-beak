import React from "react";
import ReportDetails from "./ReportDetails";

const Reports = () => {
	return (
		<div className='relative w-[1100px] top-0 left-[250px] h-full pb-10 bg-white px-6 py-8 rounded-xl overflow-x-scroll reports'>
			<h2 className='text-sm font-bold mb-4 text-deep-blue'>View Reports</h2>
			<ReportDetails />
		</div>
	);
};

export default Reports;
