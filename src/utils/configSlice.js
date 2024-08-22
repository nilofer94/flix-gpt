import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    isLoading: true,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLanguage, handleLoading } = configSlice.actions;
export default configSlice.reducer;
