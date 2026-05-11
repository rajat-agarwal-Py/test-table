import { Box, Grid, Paper, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DnsIcon from '@mui/icons-material/Dns';
import { catalogColors } from './catalogTheme';

const stats = [
  {
    title: 'Total Datasets',
    value: '1,248',
    growth: '+12%',
    icon: <StorageIcon />,
    color: '#8B5CF6',
  },
  {
    title: 'Total Tables',
    value: '5,678',
    growth: '+8%',
    icon: <TableChartIcon />,
    color: '#10B981',
  },
  {
    title: 'Total Dashboards',
    value: '234',
    growth: '+15%',
    icon: <BarChartIcon />,
    color: '#F59E0B',
  },
  {
    title: 'Data Sources',
    value: '18',
    growth: '+5%',
    icon: <DnsIcon />,
    color: '#3B82F6',
  },
];

export default function StatsCards() {
  return (
    <Grid container spacing={3}>
      {stats.map((item) => (
        <Grid item xs={12} md={6} lg={3} key={item.title}>
          <Paper
            sx={{
              background: catalogColors.card,
              border: `1px solid ${catalogColors.border}`,
              borderRadius: '18px',
              p: 3,
              color: '#fff',
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography color={catalogColors.textSecondary}>
                  {item.title}
                </Typography>

                <Typography variant="h4" fontWeight={700} mt={2}>
                  {item.value}
                </Typography>

                <Typography
                  sx={{
                    color: catalogColors.success,
                    mt: 1,
                    fontSize: 14,
                  }}
                >
                  {item.growth} vs last month
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '16px',
                  background: `${item.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                }}
              >
                {item.icon}
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}