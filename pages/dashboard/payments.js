import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/mainTemplate";

const payments = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Make Payments'>{null}</MainTemplate>}
				title='Payments'
			/>
		</div>
	);
};

export default payments;
