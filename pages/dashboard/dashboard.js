import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const dashboard = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Dashboard'>{null}</MainTemplate>}
				title='Dashboard'
			/>
		</div>
	);
};

export default dashboard;
