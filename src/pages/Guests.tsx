import { Typography } from "@mui/material";
import { GuestsList } from "./GuestsList";
import Grid from "@mui/material/Grid";
import { GuestsCreate } from "./GuestCreate";

export const Guests = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="h6" mb={2}>
          Add new visitor
        </Typography>
        <GuestsCreate />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4" mb={2}>
          Visitor management
        </Typography>
        <GuestsList />
      </Grid>
    </Grid>
  );
};
