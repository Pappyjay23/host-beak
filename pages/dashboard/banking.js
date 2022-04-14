import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/mainTemplate";

const banking = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Banking'>{null}</MainTemplate>}
				title='Banking'
			/>
		</div>
	);
};

export default banking;
