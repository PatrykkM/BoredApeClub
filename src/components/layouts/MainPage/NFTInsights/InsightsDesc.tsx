import { motion } from "framer-motion";

import { BiSolidLeftArrow } from "react-icons/bi";

import { InsightsProps } from "../../../../types/propsTypes";
import { fadeInView } from "../../../../utils/motion";

const InsightsDesc = ({ handleClick }: InsightsProps) => {
	return (
		<div className="flex flex-col items-center md:max-w-xl md:items-start md:pl-10">
			<div className="relative w-2/3 border-b-2 border-dashed border-uninportant-text md:w-full ">
				<div className=" absolute -left-2 -top-[5px] text-xs text-uninportant-text">
					<BiSolidLeftArrow />
				</div>
			</div>
			<div className="mt-3 text-center text-2xl font-medium text-white md:text-start md:text-4xl lg:text-6xl">
				<motion.h2 className="block md:hidden" {...fadeInView()}>
					Game-Changer For Online Investment Strategy
				</motion.h2>
				<motion.div className="hidden md:block" {...fadeInView()}>
					<h2>Game-Changer For</h2>
					<h2>Online Investment</h2>
					<div className="flex items-center">
						<h2>Strategy</h2>
						<div className="relative -right-0  ml-10 mt-3 h-0 w-3/5 border border-Arrow-Dark-White">
							<div className="absolute -right-1 -top-[6px] h-3 w-3 rotate-45 bg-Arrow-Dark-White"></div>
						</div>
					</div>
				</motion.div>
			</div>
			<p className="mt-3 text-center text-sm font-light text-uninportant-text md:text-start md:text-base lg:mt-9">
				This approach is a game-changer as it harnesses the unique value propositions of digital
				assets, allowing investors to tap into exclusive markets, secure ownership with blockchain
				technology
			</p>
			<button
				className="mt-6 hidden w-36 rounded-lg bg-Light-Green py-3 font-medium md:block lg:mt-9"
				onClick={(e) => handleClick(e, "Faq")}
			>
				Join our Club
			</button>
		</div>
	);
};

export default InsightsDesc;
