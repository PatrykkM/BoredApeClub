import { motion } from "framer-motion";

import { useState } from "react";

import { optionComponents } from "../../constans";

const About = () => {
	const [activeOption, setActiveOption] = useState(1);
	const options = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];

	const ActiveOption = () => {
		return optionComponents.find((e) => e.id === activeOption);
	};

	return (
		<div className=" mt-16 w-full items-center bg-Light-Grey md:flex md:justify-center" id="About">
			<section className="flex w-full items-center justify-center bg-Light-Grey  ">
				<div className="flex w-full max-w-lg flex-col items-center justify-center px-5 md:my-6  md:max-w-7xl md:flex-row  md:px-7 lg:justify-between">
					<div className="mt-6 flex flex-col self-start  md:max-w-sm lg:max-w-xl">
						<motion.h3
							className="text-3xl font-medium text-white md:text-5xl md:font-semibold lg:text-6xl"
							initial={{ y: -30, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 1 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							Bored Ape Club Elite Digital Collectibles
						</motion.h3>
						<p className="mt-3 font-light text-uninportant-text lg:mt-6">
							The Premier Destination for Beginners and Veterans Alike to Profit from Buying and
							Flipping NFTs.
						</p>
						<div className="mb-6 mt-6 flex w-full justify-around border-b-2 border-neutral-800 lg:mt-12">
							{options.map((option) => (
								<div
									onClick={() => setActiveOption(option.number)}
									className={`${
										activeOption === option.number ? `border-Light-Green` : `border-Lighter-Grey`
									} mb-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 bg-Lighter-Grey text-2xl text-white transition-all lg:mb-6`}
									key={option.number}
								>
									{option.number}
								</div>
							))}
						</div>
						<div className="hidden flex-col font-light  text-uninportant-text md:flex  ">
							<div className="">{ActiveOption()?.desc}</div>
						</div>
					</div>
					<div className="hidden grow items-center md:ml-5  md:flex md:justify-end ">
						<img
							src={ActiveOption()?.img}
							className="my-6 grow rounded-3xl object-cover  md:w-full md:max-w-md "
						/>
					</div>
					<div className="flex flex-col  font-light text-uninportant-text  ">
						<div className="md:hidden">
							<div>{ActiveOption()?.desc}</div>
							<div className="flex grow items-center md:ml-5 md:justify-end ">
								<img
									src={ActiveOption()?.img}
									className="my-6 grow rounded-3xl object-cover  md:w-full md:max-w-md "
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
