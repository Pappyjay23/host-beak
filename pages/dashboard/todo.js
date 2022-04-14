import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/mainTemplate";

const todo = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='To-do'>{null}</MainTemplate>}
				title='To-do'
			/>
		</div>
	);
};

export default todo;
