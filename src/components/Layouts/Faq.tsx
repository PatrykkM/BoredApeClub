import { motion } from "framer-motion";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { ChangeActive } from "../../ReduxToolkit/Slices/FaqSlice";
import { RootState } from "../../ReduxToolkit/store";
import mainApe from "../../assets/apesIMG/FaqApe1-Bgclear.png";
import { faqOptions } from "../../constans";
import useWindowWidth from "../../hooks/useWindowWidth";

const Faq = () => {
	const dispatch = useDispatch();

	const activeNumber = useSelector((state: RootState) => state.FAQ_Slice.ActiveNumber);

	const width = useWindowWidth();

	return (
		<div className="flex  w-full flex-col items-center">
			<section
				className="mt-12 flex w-full max-w-lg flex-col px-5 md:max-w-7xl md:flex-row md:items-center md:justify-between md:px-7 lg:items-start "
				id="Faq"
			>
				<div className="md:max-w-ms md:w-1/2 md:flex-col md:pr-10">
					<h3 className="text-3xl font-medium uppercase text-Darker-White md:text-4xl">Faq</h3>
					<div className="mt-6 font-light text-uninportant-text md:mt-3">
						NFT FAQ is the ultimate aplha group for great & Experienced Flipping NFTs
					</div>
					<div className="relative flex md:-mt-5 md:w-full md:max-w-sm ">
						<motion.img
							src={mainApe}
							alt="Image of BoredApe"
							className="z-10 object-cover"
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
								duration: 0.5,
							}}
						/>
						<div className="absolute bottom-0 left-1/2 h-4/5 w-full -translate-x-1/2 transform rounded-lg bg-Img-background"></div>
					</div>
				</div>
				<div className="mt-6 flex grow flex-col md:mt-0 lg:mt-12 ">
					{faqOptions.map((Faq, id) => (
						<div key={id}>
							<div className="  mb-3 flex   flex-col border-b border-uninportant-text text-xl font-light text-Darker-White md:text-2xl ">
								<div className="flex   w-full items-center justify-between">
									<div className="mb-1 ">{Faq.Title}</div>
									<div className="mb-1 cursor-pointer text-lg">
										{activeNumber === id + 1 ? (
											<FaMinus onClick={() => dispatch(ChangeActive(0))} />
										) : (
											<FaPlus onClick={() => dispatch(ChangeActive(id + 1))} />
										)}
									</div>
								</div>
								<div
									className={`mb-2 flex   items-center overflow-hidden transition-all duration-75   ${
										activeNumber === id + 1 ? `h-auto` : ` h-0`
									}`}
								>
									<div
										className={` overflow-hidden text-xs font-light text-uninportant-text transition-all duration-75 lg:text-sm  ${
											activeNumber === id + 1
												? ` translate-y-0 opacity-100`
												: ` -translate-y-full opacity-0`
										}`}
									>
										<div className="md:max-w-md ">{Faq.desc}</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Faq;
