import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/app/store";
import { Button, Grid, Paper } from "@mui/material";
import { useDeleteDialog } from "../../hooks/useDeleteDialog";
import { AlertDialog } from "../../components/dialogs/AlertDialog";
import { useState } from "react";
import { deleteVisitorsByIdArr } from "./VisitorSlice";
import { toast } from "react-toastify";

export const VisitorsList = () => {
  const dispatch = useDispatch();
  const visitors = useSelector((state: RootState) => state.visitors);
  const [selectedIdArr, setSelectedIdArr] = useState<number[]>([]);

  /**
   * Add / remove id from selected visitors
   * @param idArr
   */
  const handleOnSelectionChange = (idArr: number[]) => setSelectedIdArr(idArr);

  const {
    isOpen: isDeleteDialogOpen,
    setDeleteAttempt,
    cancelDeleteAttempt,
    confirmDeleteAttempt,
  } = useDeleteDialog();

  const handleConfirm = () => {
    if (selectedIdArr.length === 0) return;
    confirmDeleteAttempt();
    deleteSelected();
  };

  const deleteSelected = () => {
    dispatch(deleteVisitorsByIdArr(selectedIdArr));
    toast.success("Selected visitors deleted");
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "",
    },
    { field: "fullName", headerName: "Visitor", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 0.5,
      align: "right",
      headerAlign: "right",
      renderCell: (param: any) => <Chip label={param.row.department} />,
    },
  ];

  return (
    <Paper>
      <Grid item xs={12}>
        {visitors.length > 0 && (
          <Button
            variant="contained"
            color="error"
            onClick={() => selectedIdArr.length > 0 && setDeleteAttempt()}
            sx={{ margin: 2 }}
          >
            Remove
          </Button>
        )}
      </Grid>
      <div style={{ minHeight: "250px", width: "100%" }}>
        <DataGrid
          rows={visitors ?? []}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(e: any) => handleOnSelectionChange(e)}
          rowSelectionModel={selectedIdArr}
          initialState={{
            columns: {
              columnVisibilityModel: {
                // use id as key but dont show it in table
                id: false,
              },
            },
          }}
          sx={{ "&": { border: "none" }, margin: 0, padding: 0 }}
          hideFooter
          autoHeight
        />
      </div>
      <AlertDialog
        open={isDeleteDialogOpen}
        title={"Delete"}
        content={"Are you sure you want to delete selected visitors?"}
        handleClose={cancelDeleteAttempt}
        handleConfirm={handleConfirm}
      />
    </Paper>
  );
};
