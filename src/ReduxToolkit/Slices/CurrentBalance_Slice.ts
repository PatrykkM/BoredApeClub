import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  Balance: 150000,
};

export const CurrentBalance_Slice = createSlice({
  name: "CurrentBalance_Slice",
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

export const { ItemBought, ItemSold } = CurrentBalance_Slice.actions;
