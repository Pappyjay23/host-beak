import React from "react";

const InputForm = ({title, type, id, placeholder}) => {
	return (
		<div>
			<label htmlFor={id} className='mb-2 text-xs text-grey'>
				{title}
			</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={`border-b w-full py-1 text-sm text-deep-blue font-bold placeholder:font-thin placeholder:text-light-grey tracking-wide outline-0`}
			/>
		</div>
	);
};

export default InputForm;
