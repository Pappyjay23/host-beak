import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const payroll = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Payroll'>{null}</MainTemplate>}
				title='Payroll'
			/>
		</div>
	);
};

export default payroll;
