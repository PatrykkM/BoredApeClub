import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemSold } from "../../ReduxToolkit/Slices/CurrentBalanceSlice";
import { DataProccesing } from "../../ReduxToolkit/Slices/MyNftSlice";
import { RemoveNFT, singleProduct } from "../../ReduxToolkit/Slices/MyNftSlice";
import { RootState } from "../../ReduxToolkit/store";

const MyNFTsPage = () => {
	const dispatch = useDispatch();
	const MyNFTs = useSelector((state: RootState) => state.HandleNFT.products);
	const IsProcessingNFT = () => {
		let proccessingNFT = MyNFTs.find((processing) => processing.Processing === true);
		if (proccessingNFT === undefined) {
			return false;
		} else return true;
	};

	const HandleSellNFT = (e: singleProduct, price: number, ApeID: string) => {
		if (IsProcessingNFT() === false) {
			dispatch(DataProccesing(ApeID));
			setTimeout(() => {
				dispatch(ItemSold(price));
				dispatch(RemoveNFT(e));
				dispatch(DataProccesing(ApeID));
				console.log(e);
			}, 2000);
		}
	};

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
						<div
							className={`  mt-4 w-1/2 max-w-76  md:w-1/3 md:p-4  ${
								(id + 1) % 2 === 0 ? `pl-2` : `pr-2`
							}  `}
						>
							<div className="flex w-full  flex-col rounded-lg bg-Lighter-Grey p-2 transition-all ">
								<img
									src={NFT.Img}
									className="h-36 w-full rounded-lg object-cover  transition-all xs:h-auto  md:max-h-64 "
								/>
								<div className="mt-3 flex w-full items-center justify-between  text-sm text-white md:text-base ">
									<div className="font-light">{NFT.ApeID}</div>
									<div>{(NFT.Price / 3500).toFixed(1)}ETH</div>
								</div>
								<div className="mt-1 flex w-full justify-between text-xs font-light text-uninportant-text md:text-sm">
									<div>{NFT.Subtitle}</div>
									<div>{NFT.Price} $</div>
								</div>
								{NFT.Processing ? (
									<div className="mt-2 flex h-11 w-full items-center justify-center rounded-lg border border-Light-Green font-light text-white md:mt-4">
										<p className="mb-px ">Selling</p>
										<div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-Light-Green border-t-transparent"></div>
									</div>
								) : (
									<button
										className="mt-2 h-11 w-full rounded-lg border border-Light-Green font-light text-white md:mt-4"
										onClick={() => HandleSellNFT(NFT, NFT.Price, NFT.ApeID)}
									>
										<p className="mb-px ">Sell now</p>
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyNFTsPage;
