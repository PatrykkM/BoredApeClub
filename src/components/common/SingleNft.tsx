import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import { DataProccesing } from "../../ReduxToolkit/Slices/AllNFTsSlice";
import { ItemBought } from "../../ReduxToolkit/Slices/CurrentBalanceSlice";
import { AddNFT } from "../../ReduxToolkit/Slices/MyNftSlice";
import { singleProduct } from "../../ReduxToolkit/Slices/MyNftSlice";
import { ErrorBuyingNFT } from "../../ReduxToolkit/Slices/MyNftSlice";
import { RootState } from "../../ReduxToolkit/store";
import { SingleNftProps } from "../../Types/common";
import useWindowWidth from "../../hooks/useWindowWidth";

const SingleNft: React.FC<SingleNftProps> = ({ id, NFT, active }) => {
	const dispatch = useDispatch();
	const width = useWindowWidth();

	const CurrentBalance = useSelector((state: RootState) => state.CurrentBalance_Slice.Balance);
	const allNFT = useSelector((state: RootState) => state.All_NFTS.products);
	const MyNFT = useSelector((state: RootState) => state.HandleNFT.products);

	const IsOwned = (e: string) => {
		const AllNFTsItems = (e: string) => {
			const item = allNFT.find((item) => item.ApeID === e);
			return item?.ApeID;
		};
		const MyNFTsItem = (e: string) => {
			const item = MyNFT.find((item) => item.ApeID === e);
			return item?.ApeID;
		};
		if (AllNFTsItems(e) !== MyNFTsItem(e)) {
			return true;
		} else return false;
	};

	const IsProcessingNFT = () => {
		let proccessingNFT = allNFT.find((processing) => processing.Processing === true);
		if (proccessingNFT === undefined) {
			return false;
		} else return true;
	};

	const HandleBuyNFT = (e: singleProduct, price: number, ApeID: string) => {
		if (IsProcessingNFT() === false) {
			dispatch(DataProccesing(ApeID));
			setTimeout(() => {
				if (CurrentBalance >= price && IsOwned(ApeID)) {
					dispatch(ItemBought(price));
					dispatch(AddNFT(e));
					dispatch(DataProccesing(ApeID));
				} else {
					dispatch(ErrorBuyingNFT(true));
					dispatch(DataProccesing(ApeID));
					setTimeout(() => {
						dispatch(ErrorBuyingNFT(false));
					}, 2000);
				}
			}, 3000);
		} else return;
	};

	const childVariants = {
		hidden: {
			opacity: 0,
			y: -40,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div
			className={`mt-4 w-1/2 max-w-76  md:w-1/3 md:p-4  ${(id + 1) % 2 === 0 ? `pl-2` : `pr-2`} ${
				(id > 5 && active && width < 1280) || (id > 7 && active && width >= 1280) ? `hidden` : null
			} `}
			variants={childVariants}
			key={NFT.ApeID}
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

				{IsOwned(NFT.ApeID) ? (
					NFT.Processing ? (
						<div className="mt-2 flex h-11 w-full items-center justify-center rounded-lg border border-Light-Green font-light text-white transition-all md:mt-4">
							<p className="mb-px">Buying</p>
							<div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-Light-Green border-t-transparent"></div>
						</div>
					) : (
						<button
							className="mt-2 h-11 w-full rounded-lg border border-Light-Green font-light text-white transition-all md:mt-4"
							onClick={() => HandleBuyNFT(NFT, NFT.Price, NFT.ApeID)}
						>
							<p className="mb-px">Buy Now</p>
						</button>
					)
				) : (
					<div className="mt-2 flex h-11 w-full items-center justify-center rounded-lg border border-Light-Green font-light text-white transition-all md:mt-4">
						<p className="font-medium">Owned</p>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default SingleNft;
