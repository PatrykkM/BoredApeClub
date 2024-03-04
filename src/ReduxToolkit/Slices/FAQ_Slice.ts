import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  ActiveNumber: 0,
};

export const FAQ_Slice = createSlice({
  name: "FAQ_Slice",
  initialState,
  reducers: {
    ChangeActive: (state, action: PayloadAction<number>) => {
      state.ActiveNumber = action.payload;
    },
  },
});

export const { ChangeActive } = FAQ_Slice.actions;
