import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storageKeys } from "../../utils/core/keys";
import { Visitor } from "../../types/Visitor.types";

/**
 * Initialize state with localStorage data
 */
const loadStateFromLocalStorage = () => {
  const serializedState = localStorage.getItem(storageKeys.VISITORS);
  if (serializedState === null) return [];
  return JSON.parse(serializedState) as Visitor[];
};

const initialState: Visitor[] = loadStateFromLocalStorage();

const visitorsSlice = createSlice({
  name: "visitors",
  initialState,
  reducers: {
    addVisitor: (state, action: PayloadAction<Visitor>) => {
      state.push(action.payload);
    },
    setVisitors: (state, action: PayloadAction<Visitor[]>) => {
      return action.payload;
    },
    deleteVisitorsByIdArr: (state, action: PayloadAction<number[]>) => {
      return state.filter((visitor) => !action.payload.includes(visitor.id));
    },
  },
});

export const { addVisitor, setVisitors, deleteVisitorsByIdArr } =
  visitorsSlice.actions;
export default visitorsSlice.reducer;
