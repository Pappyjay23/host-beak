import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const sales = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Sales'>{null}</MainTemplate>}
				title='Sales'
			/>
		</div>
	);
};

export default sales;
