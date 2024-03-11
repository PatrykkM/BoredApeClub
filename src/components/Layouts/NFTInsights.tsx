import { motion } from "framer-motion";

import { BiSolidLeftArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";

import { scrollToElement } from "../../CustomFunctions/scrollToElement";
import { ChangeActive } from "../../ReduxToolkit/Slices/FaqSlice";
import BubblegumApe from "../../assets/apesIMG/BubblegumApeInsights.png";
import useWindowWidth from "../../hooks/useWindowWidth";

const NFTInsights = () => {
	const dispatch = useDispatch();
	const width = useWindowWidth();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
		e.preventDefault();
		scrollToElement(e, href);
		setTimeout(() => {
			dispatch(ChangeActive(2));
		}, 1000);
	};

	return (
		<div className="flex  w-full flex-col  items-center">
			<section className="relative my-12 flex max-w-lg  flex-col items-center px-5 md:w-full md:max-w-7xl md:flex-row-reverse md:items-end md:justify-between md:px-7 lg:mb-20 ">
				<div className="flex flex-col   items-center  md:max-w-xl md:items-start md:pl-10">
					<div className="relative w-2/3   border-b-2 border-dashed border-uninportant-text md:w-full ">
						<div className=" absolute -left-2 -top-[5px] text-xs text-uninportant-text">
							<BiSolidLeftArrow />
						</div>
					</div>
					<div className=" mt-3 text-center text-2xl font-medium text-white md:text-start md:text-4xl lg:text-6xl">
						<motion.h2
							className="block md:hidden"
							initial={{ y: -30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							Game-Changer For Online Investment Strategy
						</motion.h2>
						<motion.div
							className="hidden md:block"
							initial={{ y: -30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							<h2>Game-Changer For</h2>
							<h2>Online Investment</h2>
							<div className="flex items-center">
								<h2>Strategy</h2>
								<div className=" relative -right-0  ml-10 mt-3 h-0 w-3/5 border border-Arrow-Dark-White">
									<div className="absolute -right-1 -top-[6px] h-3 w-3 rotate-45 bg-Arrow-Dark-White"></div>
								</div>
							</div>
						</motion.div>
					</div>
					<p className="mt-3 text-center text-sm font-light text-uninportant-text md:text-start md:text-base lg:mt-9">
						This approach is a game-changer as it harnesses the unique value propositions of digital
						assets, allowing investors to tap into exclusive markets, secure ownership with
						blockchain technology
					</p>
					<button
						className="mt-6 hidden  w-36  rounded-lg bg-Light-Green py-3 font-medium md:block lg:mt-9"
						onClick={(e) => handleClick(e, "Faq")}
					>
						Join our Club
					</button>
				</div>
				<div className=" relative flex w-full max-w-lg md:mr-7">
					<motion.img
						src={BubblegumApe}
						alt="Image of BoredApe"
						className="z-10 w-full object-cover "
						initial={{
							x: width >= 1024 ? -200 : -100,
							opacity: 0,
						}}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 10,
							duration: 1.5,
						}}
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
			</section>
		</div>
	);
};

export default NFTInsights;
