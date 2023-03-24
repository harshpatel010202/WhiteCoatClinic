import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Nav from "./Nav";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "scheduleTime",
    headerName: "Schedule Time",
    description: "Check when the appointment is done.",
    width: 160,
  },
  {
    field: "AMPM",
    headerName: "",
    description: "Check when the appointment is done.",
    width: 80,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    scheduleTime: "10:45",
    AMPM: "AM",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    scheduleTime: "11:30",
    AMPM: "AM",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    scheduleTime: "12:45",
    AMPM: "PM",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    scheduleTime: "2:30",
    AMPM: "PM",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 172,
    scheduleTime: "4:00",
    AMPM: "PM",
  },
  {
    id: 6,
    lastName: "Asshai",
    firstName: "Melisandre",
    age: 150,
    scheduleTime: "5:30",
    AMPM: "PM",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    scheduleTime: "6:45",
    AMPM: "PM",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    scheduleTime: "7:30",
    AMPM: "PM",
  },
];

export default function ScheduleView() {
  return (
    <>
      <Nav />
      <h1>Your schedule for today</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
