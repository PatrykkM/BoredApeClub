import { motion } from "framer-motion";

import { useDispatch } from "react-redux";

import arrow from "../../../assets/IMG/Arrow.jpg";
import mainApe from "../../../assets/apesIMG/MainApe.png";
import { scrollToElement } from "../../../customFunctionss/scrollToElement";
import { ChangeActive } from "../../../redux/slices/FaqSlice";
import { fadeInView } from "../../../utils/motion";
import NftClubDesc from "./NftClubDesc";
import ScrollDownArrow from "./ScrollDownArrow";

const Introduction = () => {
	const dispatch = useDispatch();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
		e.preventDefault();
		scrollToElement(e, href);
		setTimeout(() => {
			dispatch(ChangeActive(2));
		}, 1000);
	};
	return (
		<>
			<div className="flex w-full  max-w-lg flex-col items-center md:max-w-7xl">
				<section className="mt-24 flex w-full flex-col items-center px-5 md:px-7" id="Home">
					<div className="w-full flex-row-reverse items-center justify-end md:flex  ">
						<div className="relative flex flex-col text-center text-5xl font-bold text-white sm:text-6xl  md:ml-12  md:text-start md:text-7xl lg:text-8xl xl:ml-28 xl:mt-4 xl:text-9xl">
							<motion.div {...fadeInView()}>
								<h1>Start Making</h1>
								<h1>Money With</h1>
								<div className="mt-1 flex items-center justify-center">
									<h1>NFTs</h1>
									<div className="relative right-1 ml-10 hidden  h-0 w-3/5 border border-Arrow-Dark-White md:block">
										<div className="absolute -right-1 -top-[6px] h-3 w-3 rotate-45 bg-Arrow-Dark-White"></div>
									</div>
								</div>
							</motion.div>
						</div>
						<div className="flex flex-col items-center md:w-1/3 md:max-w-80 md:items-start  ">
							<img src={arrow} className=" hidden w-full md:block" />
							<p className="mt-7 max-w-80 text-center text-uninportant-text md:mt-3 md:text-left">
								Interested in boosting your monthly portfolio by as much as 700-1000% Buy our NFTs
								right now!
							</p>
							<button
								className="mt-6 hidden  w-36  rounded-lg bg-Light-Green py-3 font-medium md:block"
								onClick={(e) => handleClick(e, "Faq")}
							>
								Join our Club
							</button>
						</div>
					</div>
				</section>
				<section className=" flex h-auto w-full flex-col justify-between px-5 md:mt-7 md:flex-row  ">
					<div className="relative flex md:w-2/5  ">
						<img src={mainApe} alt="Image of BoredApe" className=" z-10 object-cover " />
						<div className="absolute bottom-0 left-1/2 h-4/5 w-full -translate-x-1/2 transform rounded-lg bg-Img-background"></div>
					</div>
					<div className="mt-6 flex    grow  md:mt-0 md:items-end">
						<div className="flex grow  md:h-4/5 md:w-full  md:items-center md:justify-around ">
							<NftClubDesc />
							<ScrollDownArrow />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Introduction;
