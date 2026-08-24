import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import templateReducer from "./templateSlice";
import resumeReducer from "./resumeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    template: templateReducer,
    resume: resumeReducer
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;