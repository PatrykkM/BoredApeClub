import { NavMobileItemProps } from "../../../types/propsTypes";

const MobileNavItem = ({ li, handleClick }: NavMobileItemProps) => {
	return (
		<li key={li.name} className="list-none py-2">
			<a
				onClick={(e) => handleClick(e, li.name)}
				className="transition-all hover:text-Light-Green "
			>
				{li.name}
			</a>
		</li>
	);
};

export default MobileNavItem;
