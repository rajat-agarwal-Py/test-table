import { Box, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { catalogColors } from './catalogTheme';

export default function FilterBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mt: 4,
        p: 2,
        borderRadius: '18px',
        background: catalogColors.card,
        border: `1px solid ${catalogColors.border}`,
        flexWrap: 'wrap',
      }}
    >
      <TextField
        placeholder="Search datasets..."
        sx={{
          minWidth: 300,
          '& .MuiOutlinedInput-root': {
            background: '#08101F',
            color: '#fff',
            borderRadius: '12px',
          },
        }}
      />

      {['Domain', 'Owner', 'Tag', 'Source'].map((item) => (
        <Select
          key={item}
          defaultValue={item}
          sx={{
            minWidth: 140,
            background: '#08101F',
            color: '#fff',
            borderRadius: '12px',
          }}
        >
          <MenuItem value={item}>{item}</MenuItem>
        </Select>
      ))}

      <Typography
        sx={{
          ml: 'auto',
          color: catalogColors.primary,
          cursor: 'pointer',
          alignSelf: 'center',
        }}
      >
        Clear
      </Typography>
    </Box>
  );
}