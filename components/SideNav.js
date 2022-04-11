import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/host-beak-logo.png";
import ToRight from "../public/icons/to-right-icon.png";
import ToRightSm from "../public/icons/to-right-sm.png";
import Logout from "../public/icons/logout.png";
import CreditCard from "../public/icons/credit-card-fill.png";
import DropDown from "../public/icons/drop-down.png";
import { SideLinks } from "../data/SideLinks";

const SideNav = ({ setUserRequest }) => {
	// Logic
	const [dropMenu, setDropMenu] = useState(false);
	const handleDrop = () => {
		setDropMenu(!dropMenu);
	};
	const showMain = (item) => {
		if (item.title || item.links === "Bills") {
			setUserRequest({
				bills: true,
				request: false,
			});
		} else if (item.title || item.links === "View Report") {
			setUserRequest({
				bills: false,
				request: true,
			});
		}
	};

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
					{SideLinks.map((item, index) => (
						<div className='w-full'>
							<button
								onClick={item.drop && item.links ? handleDrop : null}
								href={item.link}
								className={
									dropMenu
										? " w-full flex items-center mb-4 justify-between text-left"
										: " w-full flex items-center justify-between mb-4 text-left"
								}
								key={index}>
								{/* <a> */}
								<span
									className={
										dropMenu
											? "bg-deep-blue p-2 mr-6 rounded-[50%] flex transition-all"
											: "flex mr-6 p-2 transition-all"
									}>
									<Image src={item.icon} height={17} width={17} />
								</span>
								<div className='w-[60%]'>
									<p
										className={
											dropMenu && item.drop
												? "text-left text-xs text-black"
												: "text-left text-xs text-light-grey"
										}>
										{item.title}
									</p>
								</div>
								{item.drop ? (
									<div className='flex'>
										{dropMenu && item.links ? (
											<Image
												src={DropDown}
												alt='drop-down'
												width={8}
												height={6}
											/>
										) : (
											<Image
												src={ToRightSm}
												alt='to-right'
												width={6}
												height={7}
											/>
										)}
									</div>
								) : (
									<span className='invisible'>Null</span>
								)}
								{/* </a> */}
							</button>
							<div className='mb-2 flex flex-col items-center'>
								{item.drop &&
									dropMenu &&
									item.links?.map((item, index) => (
										<div key={index}>
											<Link href={item.link}>
												<a>
													<button className='text-left text-xs text-light-grey hover:text-deep-blue focus:text-deep-blue '>
														{item.name}
													</button>
												</a>
											</Link>
										</div>
									))}
							</div>
						</div>
					))}
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
			<Link href='/'>
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
