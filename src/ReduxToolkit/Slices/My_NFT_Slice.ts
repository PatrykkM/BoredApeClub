import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface singleProduct {
  Img: string;
  ApeID: string;
  Price: number;
  Subtitle: string;
  Processing: boolean;
  Owned: boolean;
}
interface initialStateType {
  products: singleProduct[];
  error: boolean;
}

const initialState: initialStateType = {
  products: [],
  error: false,
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
      state.error = action.payload;
    },
  },
});

export const { AddNFT, RemoveNFT, ErrorBuyingNFT } = My_NFT_Slice.actions;
