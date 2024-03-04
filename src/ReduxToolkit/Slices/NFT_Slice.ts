import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface singleProduct {
  Img: string;
  ApeID: string;
  Price: number;
  Subtitle: string;
}
interface initialStateType {
  products: singleProduct[];
}

const initialState: initialStateType = {
  products: [],
};

export const NFT_Slice = createSlice({
  name: "NFT_Slice",
  initialState,
  reducers: {
    AddNFT: (state, action: PayloadAction<singleProduct>) => {
      state.products.push(action.payload);
    },
  },
});

export const { AddNFT } = NFT_Slice.actions;
