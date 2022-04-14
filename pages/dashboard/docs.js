import React from "react";
import DashBoardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/MainTemplate";

const docs = () => {
	return (
		<div>
			<DashBoardTemplate
				main={<MainTemplate title='Upload Docs'>{null}</MainTemplate>}
				title='Upload Docs'
			/>
		</div>
	);
};

export default docs;
