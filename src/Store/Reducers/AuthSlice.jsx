import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    location: {
      lang: "",
      lat: "",
    },
    message: {
      open: false,
      type: "",
      message: "",
    },
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
  setMessage: (state, action) => {
    state.message = action.payload;
  },
});

export const { setLocation, setMessage } = AuthSlice.actions;
export default AuthSlice.reducer;
