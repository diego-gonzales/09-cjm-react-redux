import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    readAllMyData: (state, action) => {
      state.data = action.payload;
    },
    createMyData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateMyData: (state, action) => {
      state.data = state.data.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
    },
    deleteMyData: (state, action) => {
      state.data = state.data.filter((element) => element.id !== action.payload);
    },
    noData: (state) => {
      state.data = [];
    }
  }
});

export const { readAllMyData, createMyData, updateMyData, deleteMyData, noData } = crudSlice.actions;
export default crudSlice.reducer;