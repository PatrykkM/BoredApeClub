import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface singleProduct {
	Img: string;
	ApeID: string;
	Price: number;
	Subtitle: string;
	Processing: boolean;
}
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

export const My_NFT_Slice = createSlice({
	name: "My_NFT_Slice",
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
	My_NFT_Slice.actions;
