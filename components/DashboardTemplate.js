import React  from "react";
import Head from "next/head";
import Image from "next/image";
import DropDown from "../public/icons/dropdown-icon.png";
import Notification from "../public/icons/notification.png";
import SideNav from "../components/SideNav";

const DashboardTemplate = ({main, title}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content='HostBeak is a web store for building an exceptional business'
				/>
				<link rel='icon' href='/images/host-beak-logo.png' />
			</Head>
			<section className="overflow-x-hidden">
				<div className='bg-dash-bg h-screen w-full relative'>
					<SideNav/>
					<nav className='flex py-4 px-8 w-full relative'>
						<div className='flex items-center justify-end w-full'>
							<div className='px-[.9rem] py-[.5rem] border border-light-grey rounded-[50%] mr-2 cursor-pointer'>
								<Image
									src={Notification}
									alt='drop-down'
									width={12}
									height={13}
								/>
							</div>
							<div className='w-[43px] h-[43px] bg-deep-blue rounded-[50%] mr-4 cursor-pointer'></div>
							<div className='flex items-center cursor-pointer'>
								<p className='text-xs mr-4'>Ogoluwa</p>
								<div className='cursor-pointer'>
									<Image src={DropDown} alt='drop-down' width={8} height={5} />
								</div>
							</div>
						</div>
					</nav>
					{main}
				</div>
			</section>
		</div>
	);
};

export default DashboardTemplate;
