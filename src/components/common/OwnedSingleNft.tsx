import { useDispatch, useSelector } from "react-redux";

import { ItemSold } from "../../redux/slices/CurrentBalanceSlice";
import { RemoveNFT } from "../../redux/slices/MyNftSlice";
import { DataProccesing } from "../../redux/slices/MyNftSlice";
import { RootState } from "../../redux/store";
import { singleProduct } from "../../typess/common";
import { OwnedSingleNftProps } from "../../typess/propsTypess";

const OwnedSingleNft = ({ id, NFT }: OwnedSingleNftProps) => {
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

	return (
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
					<p className="font-light">{NFT.ApeID}</p>
					<p>{(NFT.Price / 3500).toFixed(1)}ETH</p>
				</div>
				<div className="mt-1 flex w-full justify-between text-xs font-light text-uninportant-text md:text-sm">
					<p>{NFT.Subtitle}</p>
					<p>{NFT.Price} $</p>
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
	);
};

export default OwnedSingleNft;
