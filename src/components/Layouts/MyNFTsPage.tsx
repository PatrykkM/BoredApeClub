import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../ReduxToolkit/store";
import OwnedSingleNft from "../common/OwnedSingleNft";

const MyNFTsPage = () => {
	const MyNFTs = useSelector((state: RootState) => state.HandleNFT.products);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section
			className="mt-[64px]  flex  min-h-screen  w-full   justify-center bg-Light-Grey md:mt-[72px]"
			id="NFTs"
		>
			<div
				className={`relative flex w-full max-w-lg  flex-col   items-center  p-5 md:max-w-7xl md:px-2 ${
					MyNFTs.length <= 0 ? `justify-center` : ` justify-start`
				}`}
			>
				{MyNFTs.length <= 0 ? (
					<>
						<h2 className="mt-4 text-3xl font-medium text-Darker-White md:text-4xl md:font-semibold lg:text-6xl">
							You dont have any NFT
						</h2>
						<p className="mt-4 text-center text-sm font-light leading-6 text-uninportant-text md:max-w-md md:text-base">
							Go to home page and buy your first NFT!
						</p>
					</>
				) : (
					<>
						<h2 className="mt-4 text-3xl font-medium text-Darker-White md:text-4xl md:font-semibold lg:text-6xl">
							Your NFTs
						</h2>
						<p className="mt-4 text-center text-sm font-light leading-6 text-uninportant-text md:max-w-md md:text-base">
							These are the NFTs that you have bought
						</p>
					</>
				)}

				<div className=" mb-12  mt-3 flex w-full flex-wrap justify-center ">
					{MyNFTs.map((NFT, id) => (
						<OwnedSingleNft NFT={NFT} id={id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default MyNFTsPage;
