/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  List,
} from "@refinedev/mui";
import { DataGrid, GridColumns } from "@mui/x-data-grid";

export const DriverList = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColumns<any>>(
    () => [
      {
        field: "id",
        headerName: "Id",
        type: "number",
        minWidth: 50,
      },
      {
        field: "carType",
        flex: 1,
        headerName: "Car Type",
        minWidth: 200,
      },
      {
        field: "carMake",
        flex: 1,
        headerName: "Car Make",
        minWidth: 200,
      },
      {
        field: "carModel",
        flex: 1,
        headerName: "Car Model",
        minWidth: 200,
      },
      {
        field: "manufactureYear",
        flex: 1,
        headerName: "Manufacture Year",
        type: "number",
        minWidth: 200,
      },
      {
        field: "color",
        flex: 1,
        headerName: "Color",
        minWidth: 200,
      },
      {
        field: "status",
        flex: 1,
        headerName: "Status",
        minWidth: 200,
      },
      {
        field: "comments",
        flex: 1,
        headerName: "Comments",
        minWidth: 200,
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List canCreate={false}>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
