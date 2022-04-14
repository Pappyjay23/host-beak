import React from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";
import ReportDetails from "../../components/ReportDetails";

const reports = () => {
	return (
		<div>
			<DashboardTemplate
				main={
					<MainTemplate title='Reports'>
						<ReportDetails />
					</MainTemplate>
				}
				title='Reports'
			/>
		</div>
	);
};

export default reports;
