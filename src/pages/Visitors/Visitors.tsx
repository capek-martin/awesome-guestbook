import { Typography } from "@mui/material";
import { VisitorsList } from "./VisitorList";
import Grid from "@mui/material/Grid";
import { VisitorCreate } from "./VisitorCreate";

export const Visitors = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h6" mb={2}>
          Add new visitor
        </Typography>
        <VisitorCreate />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4" mb={2}>
          Visitor management
        </Typography>
        <VisitorsList />
      </Grid>
    </Grid>
  );
};
