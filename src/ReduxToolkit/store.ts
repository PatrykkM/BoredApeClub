import { configureStore } from "@reduxjs/toolkit";

import { All_NFT_Slice } from "./Slices/AllNFTsSlice";
import { CurrentBalance_Slice } from "./Slices/CurrentBalanceSlice";
import { FAQ_Slice } from "./Slices/FaqSlice";
import { My_NFT_Slice } from "./Slices/MyNftSlice";

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
