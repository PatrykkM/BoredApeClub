import { Link, useNavigate } from "react-router-dom";

import { ActiveMobileNavProps } from "../../../Types/PropsTypes";
import { MobileNav } from "../../../constans";
import { scrollToElement } from "../../../customFunctions/scrollToElement";

const ActiveMobileNav = ({
	CurrentBalance,
	handleActive,
	active,
	setActive,
}: ActiveMobileNavProps) => {
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
		<>
			{active ? (
				<div className="fixed right-5 top-20 flex w-36 flex-col items-center rounded-md  bg-Light-Grey  text-white shadow-2xl  md:hidden ">
					<div className="flex items-center justify-center py-2">
						<Link to={"BoredApeClub/MyNFTs"}>
							<button className="text-Light-Green" onClick={handleActive}>
								{location.pathname === "/BoredApeClub/MyNFTs" ? (
									<p>{CurrentBalance} $</p>
								) : (
									<p>My NFTs</p>
								)}
							</button>
						</Link>
					</div>
					{location.pathname === "/BoredApeClub/MyNFTs" ? null : (
						<div className=" py-2">
							<button className="text-indigo-400 " onClick={handleActive}>
								{location.pathname === "/BoredApeClub/MyNFTs" ? null : <p>{CurrentBalance}$</p>}
							</button>
						</div>
					)}
					{MobileNav.map((li) => (
						<li key={li.name} className="list-none py-2">
							<a
								onClick={(e) => handleClick(e, li.name)}
								className="transition-all hover:text-Light-Green "
							>
								{li.name}
							</a>
						</li>
					))}
				</div>
			) : null}
		</>
	);
};

export default ActiveMobileNav;
