import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formValues: { name: "", age: "" },
  petsInfo: { name: "", type: "" },
  isSubmitted: false,
};
const formSlice = createSlice({
  name: "formSlice",
  initialState,

  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    setPetsInfo: (state, action) => {
      state.petInfo = action.payload;
    },
    setisSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});
export const formActions = formSlice.actions;

export default formSlice.reducer;
