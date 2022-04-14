import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const schedule = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Schedule'>{null}</MainTemplate>}
				title='Schedule'
			/>
		</div>
	);
};

export default schedule;
