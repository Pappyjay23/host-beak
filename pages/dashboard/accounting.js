import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const accounting = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Accounting'>{null}</MainTemplate>}
				title='Accounting'
			/>
		</div>
	);
};

export default accounting;
