'use client';

import { Box, Typography, Stack } from '@mui/joy';

export default function FormatSummary({ summary }) {
  const sections = summary
    .split(/\n+/) // split on one or more newlines
    .map(str => str.trim())
    .filter(Boolean); // remove any empty strings

  return (
    <Stack spacing={4} sx={{ mt: 4 }}>
      {sections.map((section, idx) => {
        const isHeading = section.endsWith(':');
        const isFirstHeading = isHeading && idx === 0;

        return isHeading ? (
          <Typography
            key={idx}
            level="title-lg"
            sx={{
              fontWeight: 'bold',
              color: 'success.800',
              textAlign: isFirstHeading ? 'center' : 'left',
            }}
          >
            {section.replace(':', '')}
          </Typography>
        ) : (
          <Typography
            key={idx}
            level="body-md"
            sx={{ lineHeight: 1.8, textAlign: 'justify' }}
          >
            {section}
          </Typography>
        );
      })}
    </Stack>
  );
}
