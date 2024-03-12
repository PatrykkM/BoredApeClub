import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	Balance: 150000,
};

export const CurrentBalanceSlice = createSlice({
	name: "CurrentBalanceSlice",
	initialState,
	reducers: {
		ItemBought: (state, action: PayloadAction<number>) => {
			state.Balance = state.Balance - action.payload;
		},
		ItemSold: (state, action: PayloadAction<number>) => {
			state.Balance = state.Balance + action.payload;
		},
	},
});

export const { ItemBought, ItemSold } = CurrentBalanceSlice.actions;
