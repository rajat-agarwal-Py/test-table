import { useEffect, useState } from "react";
import Papa from "papaparse";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Chip,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

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
    headerName: "Last Updated",
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
        color={
          params.value === "Fresh"
            ? "success"
            : params.value === "Warning"
            ? "warning"
            : "error"
        }
      />
    ),
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
    <Box sx={{ p: 3, background: "#F8FAFC", minHeight: "100vh" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#0F172A"
          >
            Data Catalog
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Discover, explore and understand your data assets
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
          }}
        >
          Add Dataset
        </Button>
      </Box>

      {/* STATS */}
      <Grid container spacing={2} mb={3}>
        {[
          {
            title: "Total Datasets",
            value: "1,248",
          },
          {
            title: "Total Tables",
            value: "5,678",
          },
          {
            title: "Total Dashboards",
            value: "234",
          },
          {
            title: "Data Sources",
            value: "18",
          },
        ].map((item) => (
          <Grid item xs={12} md={3} key={item.title}>
            <Card
              sx={{
                borderRadius: "14px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FILTERS */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          borderRadius: "14px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search datasets..."
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              label="Domain"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Finance">
                Finance
              </MenuItem>
              <MenuItem value="Sales">
                Sales
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              label="Source"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="BigQuery">
                BigQuery
              </MenuItem>
              <MenuItem value="Snowflake">
                Snowflake
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {/* TABLE */}
      <Paper
        sx={{
          p: 2,
          borderRadius: "14px",
          height: 600,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

export default DataCatalogPage;
