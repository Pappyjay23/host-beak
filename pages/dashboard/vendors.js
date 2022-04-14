import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const vendors = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Vendors'>{null}</MainTemplate>}
				title='Vendors'
			/>
		</div>
	);
};

export default vendors;
