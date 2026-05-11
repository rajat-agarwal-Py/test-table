import { Box, Chip, Typography } from '@mui/material';
import { catalogColors } from './catalogTheme';

const tags = [
  { label: 'Finance', color: catalogColors.finance },
  { label: 'Sales', color: catalogColors.sales },
  { label: 'Marketing', color: catalogColors.marketing },
  { label: 'HR', color: catalogColors.hr },
  { label: 'Product', color: catalogColors.product },
  { label: 'Analytics', color: catalogColors.analytics },
  { label: 'PII', color: catalogColors.pii },
  { label: 'Machine Learning', color: catalogColors.ml },
];

export default function PopularTags() {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: '18px',
        background: catalogColors.card,
        border: `1px solid ${catalogColors.border}`,
      }}
    >
      <Typography color="#fff" mb={2}>
        Popular Tags
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap">
        {tags.map((tag) => (
          <Chip
            key={tag.label}
            label={tag.label}
            sx={{
              background: `${tag.color}22`,
              color: tag.color,
              borderRadius: '10px',
              fontWeight: 600,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}