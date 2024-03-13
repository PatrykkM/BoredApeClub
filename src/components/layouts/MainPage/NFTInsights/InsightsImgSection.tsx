import { motion } from "framer-motion";

import BubblegumApe from "../../../../assets/apesIMG/BubblegumApeInsights.png";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import { InsightsProps } from "../../../../types/propsTypes";
import { slideInWithScreenSize } from "../../../../utils/motion";

const InsightsImgSection = ({ handleClick }: InsightsProps) => {
	const width = useWindowWidth();

	return (
		<>
			<div className="relative flex w-full max-w-lg md:mr-7">
				<motion.img
					src={BubblegumApe}
					alt="Image of BoredApe"
					className="z-10 w-full object-cover "
					{...slideInWithScreenSize(width)}
				/>
				<div className="absolute bottom-0 left-1/2 h-4/5 w-full -translate-x-1/2 transform rounded-lg bg-Img-background"></div>
			</div>
			<div className="relative mt-9 flex w-full items-center justify-center md:hidden">
				<button
					className=" rounded-xl  bg-Light-Green px-6 py-3 font-medium"
					onClick={(e) => handleClick(e, "Faq")}
				>
					Join our Club
				</button>
				<div className=" absolute right-1 w-1/5 border border-uninportant-text">
					<div className="absolute -right-1 -top-[4px] h-2 w-2 rotate-45 bg-uninportant-text"></div>
				</div>
			</div>
		</>
	);
};

export default InsightsImgSection;
