import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { singleProduct } from "../../types/common";

export interface Errors {
	NoMoney: boolean;
	Spamming: boolean;
}
interface initialStateType {
	products: singleProduct[];
	error: Errors;
}

const initialState: initialStateType = {
	products: [],
	error: {
		NoMoney: false,
		Spamming: false,
	},
};

export const MyNFTSlice = createSlice({
	name: "MyNFTSlice",
	initialState,
	reducers: {
		AddNFT: (state, action: PayloadAction<singleProduct>) => {
			state.products.push(action.payload);
		},
		RemoveNFT: (state, action: PayloadAction<singleProduct>) => {
			state.products = state.products.filter((product) => product.ApeID !== action.payload.ApeID);
		},
		ErrorBuyingNFT: (state, action: PayloadAction<boolean>) => {
			state.error.NoMoney = action.payload;
		},
		ErrorSpamingNFT: (state, action: PayloadAction<boolean>) => {
			state.error.Spamming = action.payload;
		},
		DataProccesing: (state, action: PayloadAction<string>) => {
			const index = state.products.findIndex((product) => product.ApeID === action.payload);
			if (index !== -1) {
				state.products[index].Processing = !state.products[index].Processing;
			}
		},
	},
});

export const { AddNFT, RemoveNFT, ErrorBuyingNFT, ErrorSpamingNFT, DataProccesing } =
	MyNFTSlice.actions;
