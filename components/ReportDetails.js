import React from "react";
import Image from "next/image";
import Message from "../public/icons/message-square.png";
import { ReportData } from "../data/ReportData";

const ReportDetails = () => {
	return (
		<div className='w-[80%] border border-b-0 rounded-tl-md rounded-tr-md'>
			<div className=''>
				{ReportData.map((data) => (
					<div
						className='text-[0.6rem] flex items-center justify-between py-2 px-6 border-b border-box-grey'
						key={data.title}>
						<div className='flex items-center w-[50%]'>
							<input type='checkbox' id='report' className='mr-4' />
							<div className="flex items-center mr-8 w-[50%]">
								<p className={`mr-2 font-bold ${data.isNew ? 'text-deep-blue':'text-black'}`}>{data.title}</p>
								<p className={`text-[0.5rem] py-1 px-3 bg-light-green text-green rounded-xl ${data.isNew ? "visible" : "invisible"}`}>NEW</p>
							</div>
							<p className='tracking-wide'>{data.date}</p>
						</div>
						<div className='flex items-center'>
							<button className='px-8 py-2 bg-light-blue text-white rounded-sm border-light-grey border '>
								View
							</button>
							<div className='ml-4'>
								<Image src={Message} height={15} width={15} alt={data.title} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReportDetails;
