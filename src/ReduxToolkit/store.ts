import { configureStore } from "@reduxjs/toolkit";

import { AllNFTSlice } from "./Slices/AllNFTsSlice";
import { CurrentBalanceSlice } from "./Slices/CurrentBalanceSlice";
import { FAQSlice } from "./Slices/FaqSlice";
import { MyNFTSlice } from "./Slices/MyNftSlice";

export const store = configureStore({
	reducer: {
		HandleNFT: MyNFTSlice.reducer,
		FAQSlice: FAQSlice.reducer,
		CurrentBalanceSlice: CurrentBalanceSlice.reducer,
		AllNFTS: AllNFTSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
