import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import BillingForm from "./BillingForm";

const Bill = () => {
	// Logic
	const [price, setPrice] = useState(0);
	const handlePrice = (e) => {
		setPrice(e.target.value);
	};

	return (
		<div className='relative w-[90%] top-0 left-[250px] h-screen bg-white px-6 py-8 rounded-xl'>
			<h2 className='text-sm font-bold mb-4 text-deep-blue'>Add Bill</h2>
			<BillingForm />
			<div className='border rounded-sm w-[80%] py-4 px-4'>
				<div className='grid grid-cols-7 gap-4 w-full text-xs font-bold text-deep-blue border-b pb-2 px-2 border-black'>
					<span>Item</span>
					<p>Expense Category</p>
					<p>Description</p>
					<p>Qty</p>
					<p>Price</p>
					<p>Tax</p>
					<p>Amount</p>
				</div>
				<BillingDetails price={price} handlePrice={handlePrice} />
				<div className='flex flex-col items-end pr-20 text-[0.6rem] font-semibold tracking-wide'>
					<p>Subtotal: N{parseFloat(price).toFixed(2)}</p>
					<p>Total(NGN): N{parseFloat(price).toFixed(2)}</p>
				</div>
			</div>
			<div className='w-[80%]'>
				<div className='mt-4 text-[0.6rem] flex w-full relative justify-end'>
					<button className='px-4 py-2 rounded-sm border-light-grey border mr-2'>
						Cancel
					</button>
					<button className='px-4 py-2 bg-light-blue text-white rounded-sm border-light-grey border '>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default Bill;
