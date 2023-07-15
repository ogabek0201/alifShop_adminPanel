import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { axiosRequest } from "../utils/axiosRequest";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.get("Category/GetCategories");
      message.success(data.message);
        console.log(data.data); 
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "categories/deleteCategories",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.delete(`Category/${id}`);
      dispatch(getCategories());
      message.success(data.message);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addCategories = createAsyncThunk(
  "categories/addCategories",
  async (category, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.post(
        `Category/AddCategory`,
        category,
      );
      dispatch(getCategories());
      message.success(data.message);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editCategories = createAsyncThunk(
  "categories/editCategories",
  async (category, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.put(
        `Category/UpdateCategory`,
        category
      );
      dispatch(getCategories());
      message.success(data.message);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setLoading = (state) => {
  state.loading = true;
};

export const slice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: {
    [getCategories.pending]: setLoading,
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state) => {
      state.loading = false;
      state.categories = [];
    },
  },
});


export const { addId } = slice.actions;

export default slice.reducer;
