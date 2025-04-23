'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  TableBody,
  TableCell,
  TableRow,
  Box,
  Typography
} from '@mui/material';

function getScoreColor(score) {
  if (score >= 0.80) return '#4caf50';
  if (score >= 0.60) return '#ffeb3b';
  if (score >= 0.30) return '#ffa500';
  return '#f44336';
}

export function ScoreMeter({ score }) {
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

export function ScoreTableBody({ data, scoreFields }) {
  const router = useRouter();

  return (
    <TableBody>
      {data.map((row, idx) => (
        <TableRow
          key={idx}
          hover
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
          onClick={() => router.push(`/company/${encodeURIComponent(row.company_name)}`)}
        >
          <TableCell>{row.company_name}</TableCell>
          {scoreFields.map(field => (
            <TableCell key={field} sx={{ width: '200px' }}>
              <ScoreMeter score={row[field]} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}