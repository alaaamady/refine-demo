import { Refine } from "@refinedev/core";
import {
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  RefineSnackbarProvider,
  notificationProvider,
} from "@refinedev/mui";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material";
import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import { DriverList } from "pages/driver/list";
import { DriverEdit } from "pages/driver/edit";
import { DriverShow } from "pages/driver/show";

const App: React.FC = () => {
  console.log(RefineThemes.Green);
  return (
    <ThemeProvider theme={RefineThemes.Green}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <BrowserRouter>
          <Refine
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://fullcircle-srv.herokuapp.com")}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "driver",
                list: "/driver",
                show: "/driver/show/:id",
                create: "/driver/create",
                edit: "/driver/edit/:id",
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <ThemedLayoutV2
                    Title={(props) => {
                      return (
                        <>
                          <img
                            src="fullCircle-GreenBG.png"
                            style={{ width: "30px", height: "30px" }}
                            alt="Logo of the app"
                          />
                          {!props.collapsed && (
                              <Typography>FullCircle</Typography>
                          )}
                        </>
                      );
                    }}
                  >
                    <Outlet />
                  </ThemedLayoutV2>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="driver" />}
                />
                <Route path="driver">
                  <Route index element={<DriverList />} />
                  <Route path="show/:id" element={<DriverShow />} />
                  <Route path="edit/:id" element={<DriverEdit />} />
                  <Route path="create" element={<MuiInferencer />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
            </Routes>
            <UnsavedChangesNotifier />
          </Refine>
        </BrowserRouter>
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
