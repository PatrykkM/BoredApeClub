import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NFTproducts } from "../../NFT_Products/products";

interface singleProduct {
  name: string;
  category: string;
  USDprice: number;
  img: string;
}

const initialState = {
  products: NFTproducts,
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
