import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.products.find((product) => product.ApeID !== action.payload.ApeID);
    },
    ErrorBuyingNFT: (state, action: PayloadAction<boolean>) => {
      state.error.NoMoney = action.payload;
    },
    ErrorSpamingNFT: (state, action: PayloadAction<boolean>) => {
      state.error.Spamming = action.payload;
    },
  },
});

export const { AddNFT, RemoveNFT, ErrorBuyingNFT, ErrorSpamingNFT } =
  My_NFT_Slice.actions;
