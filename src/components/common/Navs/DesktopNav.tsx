import { Link, useNavigate } from "react-router-dom";

import { Nav } from "../../../constans";
import { scrollToElement } from "../../../customFunctions/scrollToElement";
import { NavDesktopOptionsProps } from "../../../types/propsTypes";

const DesktopNav = ({ id, li, setActive, active }: NavDesktopOptionsProps) => {
	const navigate = useNavigate();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const targetId = href;
		if (location.pathname !== "/BoredApeClub/") {
			navigate("/BoredApeClub/", { state: { scrollTo: targetId } });
		} else {
			scrollToElement(e, href);
		}
		setActive(!active);
	};
	return (
		<li className={`cursor-pointer  ${id === Nav.length - 1 ? `px-10` : `pl-10`}`}>
			<Link
				onClick={(e) => handleClick(e, li.name)}
				className="transition-all hover:text-Light-Green"
				to={"/"}
			>
				{li.name}
			</Link>
		</li>
	);
};

export default DesktopNav;
