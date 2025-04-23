'use client';

import { Stack, Typography } from '@mui/joy';

export default function PillData({ data }) {
  return (
    <Stack
      px={10}
      direction='row'
      spacing={5}
      sx={{
        marginBottom: 2,
        justifyContent: 'center',
        flexWrap: 'wrap',
        rowGap: 2 // Add vertical spacing between wrapped rows
      }}
    >
      {Object.entries(data).map(([label, value]) => (
        <Typography
          key={label}
          sx={{
            px: 2,
            py: 1,
            borderRadius: '20px',
            border: '1px solid',
            borderColor: 'success.main',
            backgroundColor: 'success.light',
            color: 'success.contrastText',
            fontWeight: 500,
            whiteSpace: 'nowrap'
          }}
        >
          {label}: {value}
        </Typography>
      ))}
    </Stack>
  );
}