import { motion } from "framer-motion";

import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { containerMotion, fadeInView } from "../../../utils/motion";
import SingleNft from "../../common/SingleNft";

const BuyNftSection = () => {
	const allNFT = useSelector((state: RootState) => state.AllNFTS.products);
	const [active, setActive] = useState(true);

	return (
		<section className="flex w-full items-center justify-center bg-Light-Grey " id="NFTs">
			<div className="relative flex max-w-lg flex-col items-center justify-center p-5 md:max-w-7xl md:px-2">
				<motion.h2
					className="mt-4 text-3xl font-medium text-Darker-White md:text-4xl md:font-semibold lg:text-6xl"
					{...fadeInView()}
				>
					Get Our NFT here
				</motion.h2>
				<p className="mt-4 text-center text-sm font-light leading-6 text-uninportant-text md:max-w-md md:text-base">
					NFT Signals is the ultimate alpha group for beginner and experienced traders to make
					profit flipping NFTs.
				</p>
				<motion.div
					className="mb-12 mt-3 flex w-full flex-wrap justify-center"
					{...containerMotion()}
				>
					{allNFT.map((NFT, id) => (
						<SingleNft NFT={NFT} id={id} active={active} key={NFT.ApeID} />
					))}
				</motion.div>
				<div className="absolute -bottom-6 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-Light-Green bg-main-background">
					<div className="text-Light-Green" onClick={() => setActive(!active)}>
						{active ? (
							<div className="animate-bounce text-5xl">
								<IoIosArrowRoundDown />
							</div>
						) : (
							<div className="text-3xl">
								<FaEthereum />
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuyNftSection;
