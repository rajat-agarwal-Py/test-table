import {
  Avatar,
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { catalogColors } from './catalogTheme';

const rows = [
  {
    dataset: 'customer_churn_2025',
    description: 'Customer churn dataset for analytics',
    owner: 'Jane Cooper',
    rows: '2.4M',
    columns: 24,
    updated: '2 hrs ago',
    quality: 'Fresh',
  },
  {
    dataset: 'sales_transactions_q1_2025',
    description: 'Sales transaction analytics',
    owner: 'Ralph Edwards',
    rows: '5.7M',
    columns: 31,
    updated: '5 hrs ago',
    quality: 'Fresh',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Fresh':
      return catalogColors.success;
    case 'Warning':
      return catalogColors.warning;
    default:
      return catalogColors.error;
  }
};

export default function DataCatalogTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 3,
        background: catalogColors.card,
        borderRadius: '18px',
        border: `1px solid ${catalogColors.border}`,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {['Dataset', 'Description', 'Owner', 'Rows', 'Columns', 'Last Updated', 'Quality'].map((head) => (
              <TableCell
                key={head}
                sx={{
                  color: catalogColors.textSecondary,
                  borderColor: catalogColors.border,
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.dataset}
              hover
              sx={{
                '&:hover': {
                  background: catalogColors.hover,
                },
              }}
            >
              <TableCell sx={{ borderColor: catalogColors.border }}>
                <Typography color="#fff" fontWeight={600}>
                  {row.dataset}
                </Typography>

                <Box display="flex" gap={1} mt={1}>
                  <Chip label="CSV" size="small" />
                  <Chip label="BigQuery" size="small" />
                </Box>
              </TableCell>

              <TableCell sx={{ color: '#fff', borderColor: catalogColors.border }}>
                {row.description}
              </TableCell>

              <TableCell sx={{ borderColor: catalogColors.border }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar />
                  <Typography color="#fff">{row.owner}</Typography>
                </Box>
              </TableCell>

              <TableCell sx={{ color: '#fff', borderColor: catalogColors.border }}>
                {row.rows}
              </TableCell>

              <TableCell sx={{ color: '#fff', borderColor: catalogColors.border }}>
                {row.columns}
              </TableCell>

              <TableCell sx={{ color: '#fff', borderColor: catalogColors.border }}>
                {row.updated}
              </TableCell>

              <TableCell sx={{ borderColor: catalogColors.border }}>
                <Chip
                  label={row.quality}
                  sx={{
                    background: `${getStatusColor(row.quality)}22`,
                    color: getStatusColor(row.quality),
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}