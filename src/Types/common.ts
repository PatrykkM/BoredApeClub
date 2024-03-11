import { singleProduct } from "../ReduxToolkit/Slices/AllNFTsSlice";

export interface SingleNftProps {
	id: number;
	NFT: singleProduct;
	active: boolean;
}
