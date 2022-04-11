import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/host-beak-logo.png";
import ToRight from "../public/icons/to-right-icon.png";
import Logout from "../public/icons/logout.png";
import CreditCard from "../public/icons/credit-card-fill.png";
import { SideLinks } from "../data/SideLinks";
import SideItems from "./SideItems";

const SideNav = () => {
	return (
		<div className='absolute top-0 left-0 w-[250px] bg-dash-bg p-5 z-10'>
			<Link href='/'>
				<a>
					<div className='flex justify-between p-2 rounded-2xl shadow-gray-200 shadow-lg items-center bg-white mb-8 cursor-pointer'>
						<div className='flex mr-4'>
							<Image src={Logo} alt='logo' width={40} height={38} />
						</div>
						<p className='mr-4'>HostBeak</p>
						<div className='flex'>
							<Image src={ToRight} alt='to-right' width={20} height={18} />
						</div>
					</div>
				</a>
			</Link>
			<div className='px-1 '>
				<div className='flex flex-col mb-2'>
					{SideLinks.map((item, index) => {
						return <SideItems item={item} key={index} />;
					})}
				</div>
				<Link href='/'>
					<a>
						<div className='flex mb-6'>
							<div className='flex mr-5'>
								<Image src={Logout} alt='to-right' width={17} height={17} />
							</div>
							<p className='text-xs font-bold'>Logout</p>
						</div>
					</a>
				</Link>
			</div>
			<Link href=''>
				<a>
					<div className='p-2 flex justify-center items-center bg-deep-blue text-white w-[80%] m-auto rounded-md'>
						<div className='flex mr-2'>
							<Image src={CreditCard} alt='to-right' width={20} height={20} />
						</div>
						<p className='text-xs'>Accept Payments</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default SideNav;
