import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AllNFTSlice } from "./slices/AllNFTsSlice";
import { CurrentBalanceSlice } from "./slices/CurrentBalanceSlice";
import { FAQSlice } from "./slices/FaqSlice";
import { MyNFTSlice } from "./slices/MyNftSlice";

const myNFTPersistConfig = {
	key: "HandleNFT",
	storage,
};

const persistedMyNFTReducer = persistReducer(myNFTPersistConfig, MyNFTSlice.reducer);
const persistedCurrentBalanceSlice = persistReducer(
	myNFTPersistConfig,
	CurrentBalanceSlice.reducer,
);

export const store = configureStore({
	reducer: {
		HandleNFT: persistedMyNFTReducer,
		FAQSlice: FAQSlice.reducer,
		CurrentBalanceSlice: persistedCurrentBalanceSlice,
		AllNFTS: AllNFTSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					"persist/PERSIST",
					"persist/REHYDRATE",
					"persist/PAUSE",
					"persist/PURGE",
					"persist/REGISTER",
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
