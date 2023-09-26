import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/core/routes";
import { Layout } from "./layout/Layout";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ef5742",
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(({ path, component: Component, isRestricted }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};
