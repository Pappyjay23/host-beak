import React from "react";

const MainTemplate = ({title, children}) => {
	return (
		<div className='relative w-[90%] top-0 left-[250px] h-full pb-10 bg-white px-6 py-8 rounded-xl overflow-x-scroll reports'>
			<h2 className='text-sm font-bold mb-4 text-deep-blue'>{title}</h2>
			{children}
		</div>
	);
};

export default MainTemplate;
