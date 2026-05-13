import {
  Alert,
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import {
  useCallback,
  useMemo,
  useState,
} from "react";

import { useDebounce } from "use-debounce";

import CatalogFilters from "./components/CatalogFilters";

import CatalogStats from "./components/CatalogStats";

import CatalogTable from "./components/CatalogTable";

import CatalogSkeleton from "../../components/loaders/CatalogSkeleton";

import { useCatalog } from "../../hooks/useCatalog";

const DataCatalogPage = () => {
  // SEARCH STATE
  const [search, setSearch] =
    useState("");

  // ACTIVE TAB
  const [activeTab, setActiveTab] =
    useState(0);

  // DEBOUNCED SEARCH
  const [debouncedSearch] =
    useDebounce(search, 500);

  // FETCH API DATA
  const {
    rows,
    isLoading,
    error,
  } = useCatalog();

  // FILTERED ROWS
  const filteredRows = useMemo(() => {
    return rows.filter((item) => {
      return (
        item.fileName
          .toLowerCase()
          .includes(
            debouncedSearch.toLowerCase()
          ) ||

        item.description
          .toLowerCase()
          .includes(
            debouncedSearch.toLowerCase()
          )
      );
    });
  }, [rows, debouncedSearch]);

  // MEMOIZED SEARCH HANDLER
  const handleSearch =
    useCallback((value: string) => {
      setSearch(value);
    }, []);

  // LOADING STATE
  if (isLoading) {
    return <CatalogSkeleton />;
  }

  // ERROR STATE
  if (error) {
    return (
      <Alert severity="error">
        Failed to load catalog
      </Alert>
    );
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom right, #EEF2FF, #F8FAFC)",

        minHeight: "100vh",

        p: 3,
      }}
    >
      {/* PAGE TITLE */}
      <Typography
        variant="h4"
        fontWeight={700}
        mb={1}
      >
        Data Catalog
      </Typography>

      {/* SUBTITLE */}
      <Typography
        variant="body1"
        color="text.secondary"
        mb={3}
      >
        Discover and explore datasets
      </Typography>

      {/* TABS */}
      <Tabs
        value={activeTab}
        onChange={(_, value) =>
          setActiveTab(value)
        }
        sx={{
          mb: 3,

          "& .MuiTabs-indicator": {
            backgroundColor: "#7C3AED",

            height: 3,

            borderRadius: "999px",
          },
        }}
      >
        <Tab
          label="Sources"
          sx={{
            textTransform: "none",

            fontWeight: 600,
          }}
        />

        <Tab
          label="Ingested"
          sx={{
            textTransform: "none",

            fontWeight: 600,
          }}
        />
      </Tabs>

      {/* SOURCES TAB */}
      {activeTab === 0 && (
        <>
          {/* KPI STATS */}
          <CatalogStats />

          {/* SEARCH FILTER */}
          <CatalogFilters
            search={search}
            setSearch={handleSearch}
          />

          {/* DATA TABLE */}
          <CatalogTable
            rows={filteredRows}
            loading={isLoading}
          />
        </>
      )}

      {/* INGESTED TAB */}
      {activeTab === 1 && (
        <Box
          sx={{
            backgroundColor: "white",

            borderRadius: "16px",

            p: 5,

            border:
              "1px solid #E5E7EB",

            textAlign: "center",

            boxShadow:
              "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            mb={1}
          >
            Ingested Data
          </Typography>

          <Typography
            color="text.secondary"
          >
            Coming soon...
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DataCatalogPage;
