import { configureStore } from "@reduxjs/toolkit";
import { NFT_Slice } from "../ReduxToolkit/Slices/NFT_Slice";
import { FAQ_Slice } from "../ReduxToolkit/Slices/FAQ_Slice";

export const store = configureStore({
  reducer: {
    HandleNFT: NFT_Slice.reducer,
    FAQ_Slice: FAQ_Slice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
