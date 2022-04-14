import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const message = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Message Board'>{null}</MainTemplate>}
				title='Message Board'
			/>
		</div>
	);
};

export default message;
