import { useEffect, useState } from "react";
import Papa from "papaparse";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";
import StorageIcon from "@mui/icons-material/Storage";
import TableChartIcon from "@mui/icons-material/TableChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DnsIcon from "@mui/icons-material/Dns";

import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";

interface CatalogItem {
  id: number;
  name: string;
  domain: string;
  owner: string;
  source: string;
  rows: number;
  columns: number;
  lastUpdated: string;
  quality: string;
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Dataset",
    flex: 1.5,
  },
  {
    field: "domain",
    headerName: "Domain",
    flex: 1,
  },
  {
    field: "owner",
    headerName: "Owner",
    flex: 1,
  },
  {
    field: "source",
    headerName: "Source",
    flex: 1,
  },
  {
    field: "rows",
    headerName: "Rows",
    flex: 1,
  },
  {
    field: "columns",
    headerName: "Columns",
    flex: 1,
  },
  {
    field: "lastUpdated",
    headerName: "Updated",
    flex: 1,
  },
  {
    field: "quality",
    headerName: "Quality",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        size="small"
        sx={{
          borderRadius: "8px",
          fontWeight: 600,
          backgroundColor:
            params.value === "Fresh"
              ? "#DCFCE7"
              : "#FEF3C7",
          color:
            params.value === "Fresh"
              ? "#166534"
              : "#92400E",
        }}
      />
    ),
  },
];

const stats = [
  {
    title: "Total Datasets",
    value: "1,248",
    icon: <StorageIcon color="primary" />,
  },
  {
    title: "Total Tables",
    value: "5,678",
    icon: <TableChartIcon color="success" />,
  },
  {
    title: "Total Dashboards",
    value: "234",
    icon: <DashboardIcon color="warning" />,
  },
  {
    title: "Data Sources",
    value: "18",
    icon: <DnsIcon color="info" />,
  },
];

const DataCatalogPage = () => {
  const [rows, setRows] = useState<CatalogItem[]>([]);

  useEffect(() => {
    fetch("/catalog.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse<CatalogItem>(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setRows(results.data);
          },
        });
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
        p: 3,
      }}
    >
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
            color="#0F172A"
          >
            Data Catalog
          </Typography>

          <Typography
            variant="body2"
            color="#64748B"
            mt={0.5}
          >
            Discover, explore and understand your
            data assets
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            px: 2,
            boxShadow: "none",
          }}
        >
          Add Dataset
        </Button>
      </Box>

      {/* STATS */}
      <Grid container spacing={2} mb={3}>
        {stats.map((item) => (
          <Grid item xs={12} md={3} key={item.title}>
            <Card
              sx={{
                borderRadius: "14px",
                boxShadow:
                  "0px 1px 3px rgba(15, 23, 42, 0.08)",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      variant="body2"
                      color="#64748B"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="h5"
                      fontWeight={700}
                      mt={1}
                    >
                      {item.value}
                    </Typography>
                  </Box>

                  {item.icon}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FILTERS */}
      <Paper
        sx={{
          p: 2,
          mb: 2,
          borderRadius: "14px",
          boxShadow:
            "0px 1px 3px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              size="small"
              fullWidth
              placeholder="Search datasets..."
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              size="small"
              fullWidth
              defaultValue=""
              label="Domain"
            >
              <MenuItem value="">
                All
              </MenuItem>
              <MenuItem value="Finance">
                Finance
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              size="small"
              fullWidth
              defaultValue=""
              label="Source"
            >
              <MenuItem value="">
                All
              </MenuItem>
              <MenuItem value="BigQuery">
                BigQuery
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* TABLE */}
      <Paper
        sx={{
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow:
            "0px 1px 3px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Box sx={{ height: 550 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#F8FAFC",
                fontWeight: 700,
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DataCatalogPage;
