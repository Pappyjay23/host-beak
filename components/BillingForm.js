import React from "react";

const BillingForm = () => {
	return (
		<div>
			<div className='mb-8'>
				<div className='grid grid-cols-4 gap-8 mb-4'>
					<div className='flex flex-col text-[0.6rem]'>
						<label htmlFor='vendor' className='mb-1'>
							Vendor
						</label>
						<select
							name='vendor'
							id='vendor'
							className='border w-[40%] px-2 py-1 outline-none'>
							<option value='Choose'>Choose</option>
						</select>
					</div>
					<div className='flex flex-col text-[0.6rem]'>
						<label htmlFor='date' className='mb-1'>
							Date
						</label>
						<input
							type='date'
							id='date'
							value='2021-03-25'
							className='border w-[40%] px-2 py-1 outline-none'
						/>
					</div>
					<div className='flex flex-col text-[0.6rem]'>
						<label htmlFor='vendor' className='mb-1'>
							Bill#
						</label>
						<input
							type='text'
							className='border w-[40%] px-2 py-1 outline-none'
						/>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div className=''>
						<div className='mb-4 grid grid-cols-2 gap-4'>
							<div className='flex flex-col text-[0.6rem]'>
								<label htmlFor='currency' className='mb-1'>
									Currency
								</label>
								<select
									name='currency'
									id='currency'
									className='border w-[40%] px-2 py-1 outline-none'>
									<option value='USD - U.S dollar'>USD - U.S dollar</option>
								</select>
							</div>
							<div className='flex flex-col text-[0.6rem]'>
								<label htmlFor='d-date' className='mb-1'>
									Due date
								</label>
								<input
									type='date'
									id='d-date'
									placeholder='2021-03-25'
									className='border w-[40%] px-2 py-1 outline-none'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='flex flex-col text-[0.6rem]'>
								<label htmlFor='bill' className='mb-1'>
									Upload copy of bill
								</label>
								<input type='file' id='bill' />
							</div>
							<div className='flex flex-col text-[0.6rem]'>
								<label htmlFor='po-so' className='mb-1'>
									P.O/S.O
								</label>
								<input
									type='text'
									id='po-so'
									className='border w-[40%] px-2 py-1 outline-none'
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col text-[0.6rem] w-[80%]'>
						<label htmlFor='notes' className='mb-1'>
							Notes
						</label>
						<textarea
							id='notes'
							className='border w-[40%] px-2 py-1 outline-none h-full'></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillingForm;
