import { configureStore } from "@reduxjs/toolkit";
import { storageKeys } from "../core/keys";
import visitorsReducer from "../../pages/Visitors/VisitorSlice";

const store = configureStore({
  reducer: {
    visitors: visitorsReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    storageKeys.VISITORS,
    JSON.stringify(store.getState().visitors)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
