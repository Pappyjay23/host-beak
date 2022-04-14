import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const settings = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Settings'>{null}</MainTemplate>}
				title='Settings'
			/>
		</div>
	);
};

export default settings;
