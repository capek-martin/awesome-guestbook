import { storageKeys } from "../../utils/core/keys";
import { VisitorForm } from "./VisitorForm";
import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addVisitor } from "./VisitorSlice";
import { Visitor } from "../../types/Visitor.types";
import { toast } from "react-toastify";

export const VisitorCreate = () => {
  const dispatch = useDispatch();

  /**
   * Submit - set state and localStorage
   */
  const handleOnSubmit: SubmitHandler<Visitor> = async (values: Visitor) => {
    const visitorsLoc = window.localStorage.getItem(storageKeys.VISITORS);
    const storedVisitors = visitorsLoc ? JSON.parse(visitorsLoc) : [];
    const emailExists = storedVisitors.some(
      (visitor: Visitor) => visitor.email === values.email
    );

    if (emailExists)
      return toast.error("Email already exists. Please use different email.");
    const index = storedVisitors.length;
    const newVisitor = { ...values, id: index };
    toast.success("Visitor added succesfully");
    dispatch(addVisitor(newVisitor));
  };

  return <VisitorForm onSubmit={handleOnSubmit} defaultValues={null} />;
};
