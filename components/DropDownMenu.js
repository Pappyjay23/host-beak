import React from "react";
import Link from 'next/link'

const DropDownMenu = ({item}) => {
	return (
		<div>
			<Link href={item.link}>
				<a>
					<button className='text-left text-xs text-light-grey hover:text-deep-blue focus:text-deep-blue '>
						{item.name}
					</button>
				</a>
			</Link>
		</div>
	);
};

export default DropDownMenu;
