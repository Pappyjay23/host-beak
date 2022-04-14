import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const billing = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Billing'>{null}</MainTemplate>}
				title='Billing'
			/>
		</div>
	);
};

export default billing;
