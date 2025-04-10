import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function DataDisplay({ data }) {
  // Check if the data is valid (must be an array)
  console.log(data)
  if (!Array.isArray(data)) {
    return <Typography>Error: Invalid response format</Typography>;
  }

  // If there is no data, show a message
  if (data.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  // Extract the column names from the first event object (keys of the first object in the "data" array)
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} className="mt-4">
      <Table>
        <TableHead>
          <TableRow>
            {/* Render column headers dynamically */}
            {columns.map((col) => (
              <TableCell key={col} style={{ fontWeight: "bold" }}>
                {col.replace(/_/g, " ")} {/* Replacing underscores with spaces for readability */}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Render each row dynamically from the "data" array */}
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col] ?? "—"}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}