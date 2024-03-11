import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { allNFT } from "../../NftProducts/products";
import { singleProduct } from "../../Types/common";

interface initialStateType {
	products: singleProduct[];
}

const initialState: initialStateType = {
	products: allNFT,
};

export const AllNFTSlice = createSlice({
	name: "AllNFTSlice",
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

export const { DataProccesing } = AllNFTSlice.actions;
