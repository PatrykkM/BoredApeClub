import { Link } from "react-router-dom";

import { MobileNav } from "../../../constans";
import { ActiveMobileNavProps } from "../../../typess/propsTypess";
import MobileNavItem from "../../common/Navs/MobileNavItem";

const ActiveMobileNav = ({
	CurrentBalance,
	handleActive,
	active,
	handleClick,
}: ActiveMobileNavProps) => {
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
						<MobileNavItem li={li} handleClick={handleClick} />
					))}
				</div>
			) : null}
		</>
	);
};

export default ActiveMobileNav;
