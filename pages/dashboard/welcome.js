import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/mainTemplate";

const welcome = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Welcome'>{null}</MainTemplate>}
				title='Welcome'
			/>
		</div>
	);
};

export default welcome;
