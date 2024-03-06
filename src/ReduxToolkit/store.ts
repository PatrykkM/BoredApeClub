import { configureStore } from "@reduxjs/toolkit";
import { My_NFT_Slice } from "./Slices/My_NFT_Slice";
import { FAQ_Slice } from "../ReduxToolkit/Slices/FAQ_Slice";
import { CurrentBalance_Slice } from "./Slices/CurrentBalance_Slice";
import { All_NFT_Slice } from "./Slices/All_NFTs_Slice";

export const store = configureStore({
  reducer: {
    HandleNFT: My_NFT_Slice.reducer,
    FAQ_Slice: FAQ_Slice.reducer,
    CurrentBalance_Slice: CurrentBalance_Slice.reducer,
    All_NFTS: All_NFT_Slice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
