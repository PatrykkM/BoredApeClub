import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	ActiveNumber: 0,
};

export const FAQSlice = createSlice({
	name: "FAQSlice",
	initialState,
	reducers: {
		ChangeActive: (state, action: PayloadAction<number>) => {
			state.ActiveNumber = action.payload;
		},
	},
});

export const { ChangeActive } = FAQSlice.actions;
