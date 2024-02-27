import { configureStore } from "@reduxjs/toolkit";
import { NFT_Slice } from "../ReduxToolkit/Slices/NFT_Slice";

export const store = configureStore({
  reducer: {
    HandleNFT: NFT_Slice.reducer,
  },
});
