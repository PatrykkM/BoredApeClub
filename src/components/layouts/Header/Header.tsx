import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Nav } from "../../../constans";
import { scrollToElement } from "../../../customFunctions/scrollToElement";
import { RootState } from "../../../redux/store";
import DesktopNav from "../../common/Navs/DesktopNav";
import ActiveMobileNav from "./ActiveMobileNav";

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	let CurrentBalance = useSelector((state: RootState) => state.CurrentBalanceSlice.Balance);

	const handleActive = () => {
		setActive(!active);
	};

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
		<div className="flex  max-w-lg flex-col items-center">
			<div className="fixed z-50  w-full">
				<section className=" flex  grow  items-center justify-center backdrop-blur-lg backdrop-filter">
					<div className="relative flex grow items-center justify-between px-5 py-4  md:max-w-7xl md:px-7">
						<Link to={"/BoredApeClub/"}>
							<div className="hexagon h-8 w-7 text-xs font-semibold md:h-10 md:w-9 md:text-sm md:font-bold">
								NFT
							</div>
						</Link>
						<div className=" absolute left-1/2  top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:flex">
							<ul className="flex h-12  items-center justify-around rounded-full bg-Lighter-Grey font-extralight  text-Darker-White">
								{Nav.map((li, id) => (
									<DesktopNav li={li} id={id} active={active} setActive={setActive} key={id} />
								))}
							</ul>
						</div>
						<ActiveMobileNav
							active={active}
							handleActive={handleActive}
							setActive={setActive}
							CurrentBalance={CurrentBalance}
							handleClick={handleClick}
						/>
						<div className="text-white">
							<div className="hidden w-full justify-center md:flex">
								<Link to={"BoredApeClub/MyNFTs"}>
									<button className="flex rounded-md border  border-Light-Green px-3 py-2 text-sm font-light">
										{location.pathname === "/BoredApeClub/MyNFTs" ? (
											<p>{CurrentBalance} $</p>
										) : (
											<p>My NFTs</p>
										)}
									</button>
								</Link>
							</div>
							<div className="text-3xl md:hidden" onClick={handleActive}>
								<LuMenu />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Header;
