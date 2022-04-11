import React from "react";
import Edit from '../public/icons/edit.png'
import Delete from '../public/icons/delete.png'
import Image from "next/image";

const BillingDetails = ({price, handlePrice}) => {
	return (
		<div>
			<div className='grid grid-cols-7 gap-4 text-[0.6rem] my-4 border-b border-box-grey pb-2'>
				<div>
					<select
						id='choose'
						className='border rounded-sm w-full px-2 py-1 outline-none'>
						<option value='choose'>Choose</option>
					</select>
				</div>
				<div>
					<select
						id='choose'
						className='border rounded-sm w-full px-2 py-1 outline-none'>
						<option value='choose'>Choose</option>
					</select>
				</div>
				<div>
					<input
						type='text'
						className='border rounded-sm w-full px-2 py-1 outline-none'
					/>
				</div>
				<div>
					<input
						type='number'
						id='qty'
						value='1'
						className='border rounded-sm w-full px-2 py-1 outline-none'
					/>
				</div>
				<div>
					<input
						className='border rounded-sm w-full px-2 py-1 outline-none'
						type='number'
						id='price'
						value={price}
						onChange={handlePrice}
					/>
				</div>
				<div className='flex items-center'>
					<input
						type='number'
						id='tax'
						className='border rounded-sm w-full px-2 py-1 outline-none'
					/>
					<div className='ml-2'>
						<Image src={Edit} height={20} width={20} />
					</div>
				</div>
				<div className='flex items-center'>
					<span>
						N
						{price > 0
							? parseFloat(price).toFixed(2)
							: parseFloat(0).toFixed(2)}
					</span>
					<div className='ml-2'>
						<Image src={Delete} height={15} width={15} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingDetails;
