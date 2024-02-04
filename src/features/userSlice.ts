import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  contactNumber: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateContactNumber(state, action) {
      state.contactNumber = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { updateName, updateContactNumber, updateAddress } =
  userSlice.actions;

export default userSlice.reducer;
