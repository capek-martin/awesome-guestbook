import { configureStore } from "@reduxjs/toolkit";
import guestsReducer from "../../pages/GuestSlice";
import { storageKeys } from "../core/keys";

const store = configureStore({
  reducer: {
    guests: guestsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    storageKeys.GUESTS,
    JSON.stringify(store.getState().guests)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
