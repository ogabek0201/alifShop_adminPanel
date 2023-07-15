import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { axiosRequest } from "../utils/axiosRequest";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.get("Product/GetProducts");
      message.success(data.message)
      // let products = data.data.filter(product =>product.categoryName.includes("&"))
      // return products;
      return data.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addUsers = createAsyncThunk(
//   "users/addUsers",
//   async (e, { rejectWithValue, dispatch }) => {
//     try {
//       const { data = [] } = await axiosRequest.post("users", e);
//       dispatch(getUsers());
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const setLoading = (state) => {
  state.loading = true;
};

export const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: setLoading,
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
      state.products = [];
    },
  },
});

// export const {  } = slice.actions;

export default slice.reducer;
