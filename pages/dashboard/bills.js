import React from "react";
import Bill from "../../components/bill/Bill";
import DashboardTemplate from "../../components/DashboardTemplate";
import MainTemplate from "../../components/mainTemplate";

const bills = () => {
	return (
		<div>
			<DashboardTemplate
				main={
					<MainTemplate title='Bills'>
						<Bill />
					</MainTemplate>
				}
				title='Bills'
			/>
		</div>
	);
};

export default bills;
