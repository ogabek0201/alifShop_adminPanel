import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { axiosRequest } from "../utils/axiosRequest";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.get("Auth/GetAllUsers");
      message.success('все пользователи!')
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (e, { rejectWithValue, dispatch }) => {
    try {
      const { data = [] } = await axiosRequest.post("Auth/Register", e);
      dispatch(getUsers());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setLoading = (state) => {
  state.loading = true;
};

export const slice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: setLoading,
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
      state.user = [];
    },
  },
});

export const { addId } = slice.actions;

export default slice.reducer;
