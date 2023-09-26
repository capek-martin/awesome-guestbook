import { ReactNode } from "react";
import "./Layout.scss";
import { Grid, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

/**
 * Main layout component
 */
export const Layout = ({ children }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12} className="toolbar">
        <Typography variant="h6" color={"white"}>
          Application
        </Typography>
      </Grid>
      <Grid item xs={12} className="content">
        {children}
      </Grid>
    </Grid>
  );
};
