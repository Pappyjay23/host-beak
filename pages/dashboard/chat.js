import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const chat = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Chat'>{null}</MainTemplate>}
				title='Chat'
			/>
		</div>
	);
};

export default chat;
