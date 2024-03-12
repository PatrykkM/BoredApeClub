import { motion } from "framer-motion";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";

import { ChangeActive } from "../../../redux/slices/FaqSlice";
import arrow from "../../../assets/IMG/Arrow.jpg";
import mainApe from "../../../assets/apesIMG/MainApe.png";
import { IntroductionDesc } from "../../../constans";
import { scrollToElement } from "../../../customFunctions/scrollToElement";
import { fadeInView } from "../../../utils/motion";
import IntroductionSingleDesc from "../../common/IntroductionSingleDesc";

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
							<div className=" flex h-44 w-44 flex-col items-center rounded-lg bg-Img-background  md:h-52 md:w-52 lg:h-60 lg:w-2/5">
								<div className="flex grow flex-col px-3 py-2 text-lg text-white md:p-4 lg:justify-center lg:p-5 ">
									<h4 className="font-medium md:text-xl lg:text-3xl">NFT club</h4>
									<div className="my-1  flex items-center ">
										<div className=" hexagon h-8 w-7 text-xs font-semibold text-Custom-Grey md:h-9 md:w-8">
											NFT
										</div>
										<p className="ml-4 text-3xl text-Light-Green md:text-4xl">+550%</p>
									</div>
									<div className="flex grow flex-col justify-around lg:justify-around  ">
										{IntroductionDesc.map((item) => (
											<IntroductionSingleDesc item={item} />
										))}
									</div>
								</div>
							</div>
							<div className="flex grow flex-col items-center  justify-center md:mr-10 md:grow-0">
								<div className="ml-9 flex flex-col items-center md:ml-0">
									<div className="flex h-36 w-12 items-center justify-center rounded-full bg-Img-background lg:h-44 lg:w-16">
										<div className=" relative h-3/4 w-1 rounded-full bg-Light-Green ">
											<div className=" absolute -bottom-8 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-Light-Green">
												<MdOutlineKeyboardArrowDown />
											</div>
										</div>
									</div>
									<div className="mt-1 font-extralight text-white">Scroll down</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Introduction;
