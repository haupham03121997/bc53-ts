import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/user.slice";

const rootReducers = combineReducers({
  [UserSlice.name]: UserSlice.reducer,
  // Lấy name từ trong slice của userSlice: { name :"user"} => userSlice.name => "user"
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
