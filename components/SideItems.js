import React, {useState} from "react";
import SideLink from "./SideLink";
import DropDownMenu from "./DropDownMenu";

const SideItems = ({item, index}) => {
	const [dropMenu, setDropMenu] = useState(false);
	const handleDrop = () => {
		setDropMenu(!dropMenu);
	};
	return (
		<div className='w-full' key={index}>
			<SideLink
				item={item}
				index={index}
				dropMenu={dropMenu}
				handleDrop={handleDrop}
			/>
			<div className='mb-2 flex flex-col items-center'>
				{item.drop &&
					dropMenu &&
					item.links?.map((item, index) => (
						<DropDownMenu item={item} index={index} />
					))}
			</div>
		</div>
	);
};

export default SideItems;
