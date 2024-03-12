import { configureStore } from "@reduxjs/toolkit";

import { AllNFTSlice } from "./slices/AllNFTsSlice";
import { CurrentBalanceSlice } from "./slices/CurrentBalanceSlice";
import { FAQSlice } from "./slices/FaqSlice";
import { MyNFTSlice } from "./slices/MyNftSlice";

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
