import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { scrollToElement } from "../customFunctions/scrollToElement";

const useScrollNav = () => {
	const [active, setActive] = useState(false);
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

	return { active, handleClick };
};

export default useScrollNav;
