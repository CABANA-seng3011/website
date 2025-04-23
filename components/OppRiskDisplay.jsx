import React from 'react';
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
import { ScoreTableBody } from '@/components/ScoreTableBody';

function ScoreTable({ title, data }) {
  return (
    <Box flex={1}>
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
          <ScoreTableBody data={data} scoreFields={['score']} />
        </Table>
      </TableContainer>
    </Box>
  );
}

export default function OppRiskDisplay({ opp, risk }) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mt={4}>
      <ScoreTable title="Opportunity" data={opp} />
      <ScoreTable title="Risk" data={risk} />
    </Stack>
  );
}