import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storageKeys } from "../utils/core/keys";

interface Guest {
  id: number;
  fullName: string;
  email: string;
  department: string;
}

/**
 * Initialize state with localStorage data
 */
const loadStateFromLocalStorage = () => {
  const serializedState = localStorage.getItem(storageKeys.GUESTS);
  if (serializedState === null) return [];
  return JSON.parse(serializedState) as Guest[];
};

const initialState: Guest[] = loadStateFromLocalStorage();

const guestsSlice = createSlice({
  name: "guests",
  initialState,
  reducers: {
    addGuest: (state, action: PayloadAction<Guest>) => {
      state.push(action.payload);
    },
    setGuests: (state, action: PayloadAction<Guest[]>) => {
      return action.payload;
    },
    deleteGuestsByIdArr: (state, action: PayloadAction<number[]>) => {
      return state.filter((guest) => !action.payload.includes(guest.id));
    },
  },
});

export const { addGuest, setGuests, deleteGuestsByIdArr } = guestsSlice.actions;
export default guestsSlice.reducer;
