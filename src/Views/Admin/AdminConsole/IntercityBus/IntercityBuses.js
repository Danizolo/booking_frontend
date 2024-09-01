/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 31/08/2024 - 22:56:32
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 31/08/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/

import AdminHeader from "../../AdminComponents/AdminHeader";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { Urls } from "../../../../Utilities/Urls";
import axios from "axios";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const IntercityBuses = () => {
  const getTravelAgencies = async () => {
    try {
      let url = Urls.serverUrl + Urls.travelAgencies;
      let travelAgencies = await axios
        .get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  useEffect(() => {
    getTravelAgencies();
  }, []);
  return (
    <div>
      <AdminHeader />

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <div role="presentation" className="p-2" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Typography sx={{ color: "text.primary" }}>
                  Intercity Bus
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              Intercity Bus Statistics will go here...
            </Grid>
            <Grid item xs={9}>
              <Grid item xs={12}>
                <Button variant="contained" endIcon={<AddIcon />}>
                  New Agency
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div className="m-4">
                  <Paper sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      initialState={{ pagination: { paginationModel } }}
                      pageSizeOptions={[5, 10]}
                      sx={{ border: 0 }}
                    />
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default IntercityBuses;
