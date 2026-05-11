import { Box, Button, Typography } from '@mui/material';

import StatsCards from './StatsCards';
import FilterBar from './FilterBar';
import PopularTags from './PopularTags';
import DataCatalogTable from './DataCatalogTable';
import { catalogColors } from './catalogTheme';

export default function DataCatalogPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: catalogColors.background,
        p: 4,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h3" fontWeight={700} color="#fff">
            Data Catalog
          </Typography>

          <Typography
            sx={{
              color: catalogColors.textSecondary,
              mt: 1,
            }}
          >
            Discover, explore and understand your data assets
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            background: catalogColors.primary,
            borderRadius: '12px',
            textTransform: 'none',
            px: 3,
            py: 1.5,
          }}
        >
          + Add Dataset
        </Button>
      </Box>

      <StatsCards />
      <FilterBar />
      <PopularTags />
      <DataCatalogTable />
    </Box>
  );
}