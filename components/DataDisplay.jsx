import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { ScoreMeter } from './ScoreTableBody';

export default function DataDisplay({ data }) {
  if (!Array.isArray(data)) {
    return <Typography>Error: Invalid response format</Typography>;
  }

  if (data.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col} style={{ fontWeight: 'bold' }}>
                {col.replace(/_/g, ' ')}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => {
                const value = row[col];
                const isScoreField = col.toLowerCase().includes('score') || col.toLowerCase().includes('percentile');

                return (
                  <TableCell key={col}>
                    {isScoreField && typeof value === 'number' ? (
                      <ScoreMeter score={value} />
                    ) : (
                      value ?? '—'
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}