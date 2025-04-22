'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack
} from '@mui/material';

// Function to determine color based on score
function getScoreColor(score) {
  if (score >= 0.80) return '#4caf50';
  if (score >= 0.50) return '#ffeb3b';
  if (score >= 0.30) return '#ffa500';
  return '#f44336';
}

function ScoreMeter({ score }) {
  const percentage = Math.round(score * 100);
  const color = getScoreColor(score);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box
        width={60}
        height={10}
        borderRadius={5}
        bgcolor="#ddd"
        position="relative"
      >
        <Box
          position="absolute"
          height="100%"
          borderRadius={5}
          bgcolor={color}
          width={`${percentage}%`}
        />
      </Box>
      <Typography variant="body2">{percentage}</Typography>
    </Box>
  );
}

function ScoreTable({ title, data, valueKey = 'score', link = true }) {
  return (
    <Box flex={1} minWidth={300}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Company Name</strong></TableCell>
              <TableCell><strong>Score</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, idx) => {
              const rowContent = (
                <TableRow
                  hover
                  key={idx}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <TableCell>{row.company_name}</TableCell>
                  <TableCell sx={{ width: '200px' }}>
                    <ScoreMeter score={row[valueKey]} />
                  </TableCell>
                </TableRow>
              );

              return link ? (
                <Link
                  key={idx}
                  href={`/company/${encodeURIComponent(row.company_name)}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {rowContent}
                </Link>
              ) : rowContent;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default function FlexDisplay({ datasets }) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mt={4}>
      {datasets.map(({ title, data, valueKey, link }, idx) => (
        <ScoreTable
          key={idx}
          title={title}
          data={data}
          valueKey={valueKey}
          link={link}
        />
      ))}
    </Stack>
  );
}