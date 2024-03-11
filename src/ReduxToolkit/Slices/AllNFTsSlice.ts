import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { allNFT } from "../../NFT_Products/products";

export interface singleProduct {
	Img: string;
	ApeID: string;
	Price: number;
	Subtitle: string;
	Processing: boolean;
}
interface initialStateType {
	products: singleProduct[];
}

const initialState: initialStateType = {
	products: allNFT,
};

export const All_NFT_Slice = createSlice({
	name: "All_NFT_Slice",
	initialState,
	reducers: {
		DataProccesing: (state, action: PayloadAction<string>) => {
			const index = state.products.findIndex((product) => product.ApeID === action.payload);
			if (index !== -1) {
				state.products[index].Processing = !state.products[index].Processing;
			}
		},
	},
});

export const { DataProccesing } = All_NFT_Slice.actions;
