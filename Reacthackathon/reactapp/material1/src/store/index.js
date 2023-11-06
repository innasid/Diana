import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "state1",
  initialState: {
    islogin: false,
    user: "",
  },

  reducers: {
    changelogin(state, action) {
      let data = {
        ...state,
        islogin: action.payload,
      };
      return data;
    },

    changeuser(state, action) {
      let data1 = {
        ...state,
        user: action.payload,
      };
      return data1;
    },
  },
});

export const login = slice.actions;

const store = configureStore({ reducer: slice.reducer });

export default store;

