import React from "react";
import Link from 'next/link'
import Image from "next/image"
import ToRightSm from "../public/icons/to-right-sm.png";
import DropDown from "../public/icons/drop-down.png";

const SideLink = ({ item, dropMenu, handleDrop}) => {
	return (
		<Link href={item.link} passHref>
			<a>
				<button
					onClick={item.drop && item.links ? handleDrop : null}
					className={
						dropMenu
							? " w-full flex items-center mb-4 justify-between text-left"
							: " w-full flex items-center justify-between mb-4 text-left"
					}>
					<span
						className={
							dropMenu
								? "bg-deep-blue p-2 mr-6 rounded-[50%] flex transition-all"
								: "flex mr-6 p-2 transition-all"
						}>
						<Image src={item.icon} height={17} width={17} alt={item.title} />
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
								<Image src={DropDown} alt='drop-down' width={8} height={6} />
							) : (
								<Image src={ToRightSm} alt='to-right' width={6} height={7} />
							)}
						</div>
					) : (
						<span className='invisible'>Null</span>
					)}
				</button>
			</a>
		</Link>
	);
};

export default SideLink;
