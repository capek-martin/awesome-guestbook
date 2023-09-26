import { useState } from "react";

export const useDeleteDialog = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number | null>(null);

  const handleDeleteAttempt = (id?: number) => {
    id && setIdToDelete(id);
    setOpen(true);
  };

  const handleCancelDeleteAttempt = () => {
    setIdToDelete(null);
    setOpen(false);
  };

  const handleConfirmDeleteAttempt = () => {
    setIdToDelete(null);
    setOpen(false);
  };

  return {
    isOpen,
    idToDelete,
    setDeleteAttempt: handleDeleteAttempt,
    cancelDeleteAttempt: handleCancelDeleteAttempt,
    confirmDeleteAttempt: handleConfirmDeleteAttempt,
  };
};
