import { addUser, fetchUsers, deleteUser, updateUser } from './userOperations';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: state => {
      state.isLoading = false;
    },
    [addUser.pending]: state => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [addUser.rejected]: state => {
      state.isLoading = false;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(user => user.id !== payload);
      state.isLoading = false;
    },
    [deleteUser.rejected]: state => {
      state.isLoading = false;
    },
    [updateUser.pending]: state => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(user => user.id === payload);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateUser.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
