import { storageKeys } from "../utils/core/keys";
import { GuestForm } from "./GuestForm";
import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addGuest } from "./GuestSlice";
import { Guest } from "../types/Guest.types";
import { toast } from "react-toastify";

export const GuestsCreate = () => {
  const dispatch = useDispatch();

  /**
   * Submit - set state and localStorage
   */
  const handleOnSubmit: SubmitHandler<Guest> = async (values: Guest) => {
    const guestsLoc = window.localStorage.getItem(storageKeys.GUESTS);
    const storedGuests = guestsLoc ? JSON.parse(guestsLoc) : [];
    const emailExists = storedGuests.some(
      (guest: Guest) => guest.email === values.email
    );

    if (emailExists)
      return toast.error("Email already exists. Please use different email.");
    const index = storedGuests.length;
    const newGuest = { ...values, id: index };
    toast.success("Visitor added succesfully");
    dispatch(addGuest(newGuest));
  };

  return <GuestForm onSubmit={handleOnSubmit} defaultValues={null} />;
};
