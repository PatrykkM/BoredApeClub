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
    RemoveNFT: (state, action: PayloadAction<singleProduct>) => {
      state.products.find((product) => product.ApeID !== action.payload.ApeID);
    },
  },
});

export const { AddNFT, RemoveNFT } = NFT_Slice.actions;
