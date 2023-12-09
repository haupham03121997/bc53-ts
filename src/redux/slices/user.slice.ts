import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CurrentUser } from "../../types/user.type";
import { getLocalStorage } from "../../helpers/helpers";

const userLocal = getLocalStorage<CurrentUser | null>("CURRENT_USER");

interface StateType {
  currentUser: typeof userLocal;
}

const initialState: StateType = {
  currentUser: userLocal,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<CurrentUser | null>) => {
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice;
