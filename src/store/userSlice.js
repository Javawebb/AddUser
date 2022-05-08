import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    createUser(state, action) {
      return [...state, action.payload];
    },
    editUser(state, action) {
      state.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
        return user;
      });
    },
    deleteUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});
export const { createUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;