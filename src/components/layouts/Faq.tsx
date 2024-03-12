import { motion } from "framer-motion";

import FaqApe from "../../assets/apesIMG/FaqApe.png";
import { faqOptionsDesc } from "../../constans";
import useWindowWidth from "../../hooks/useWindowWidth";
import { slideInWithScreenSize } from "../../utils/motion";
import FaqOption from "../common/FaqOption";

const Faq = () => {
	const width = useWindowWidth();

	return (
		<div className="flex  w-full flex-col items-center">
			<section
				className="mt-12 flex w-full max-w-lg flex-col px-5 md:max-w-7xl md:flex-row md:items-center md:justify-between md:px-7 lg:items-start "
				id="Faq"
			>
				<div className="md:max-w-ms md:w-1/2 md:flex-col md:pr-10">
					<h3 className="text-3xl font-medium uppercase text-Darker-White md:text-4xl">Faq</h3>
					<p className="mt-6 font-light text-uninportant-text md:mt-3">
						NFT FAQ is the ultimate aplha group for great & Experienced Flipping NFTs
					</p>
					<div className="relative flex md:-mt-5 md:w-full md:max-w-sm ">
						<motion.img
							src={FaqApe}
							alt="Image of BoredApe"
							className="z-10 object-cover"
							{...slideInWithScreenSize(width)}
						/>
						<div className="absolute bottom-0 left-1/2 h-4/5 w-full -translate-x-1/2 transform rounded-lg bg-Img-background"></div>
					</div>
				</div>
				<div className="mt-6 flex grow flex-col md:mt-0 lg:mt-12 ">
					{faqOptionsDesc.map((Faq, id) => (
						<FaqOption Faq={Faq} id={id} key={id} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Faq;
