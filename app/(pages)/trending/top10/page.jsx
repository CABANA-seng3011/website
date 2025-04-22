'use client';

import React from 'react';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ScoreTableBody from '@/components/ScoreTableBody';
import { top10Nasdaq } from '@/helpers/data';
import { Box, Container } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';

const bodyText = 'This list provides a ranked TOP 10 view of Nasdaq-100 companies based on their overall ESG score. The scores are calculated by averaging the scores from the three main categories: Environmental, Social, and Governance. Each pillar has been calculated by averaging the scores from the respective opportunity and risk categories.';

export default function () {
  return (
    <Box py={5}>
      <TitlePanel title='TOP 10 Nasdaq-100' body={bodyText}/>
      <Container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Company</strong></TableCell>
                <TableCell><strong>Average ESG Score</strong></TableCell>
                <TableCell><strong>Social</strong></TableCell>
                <TableCell><strong>Environmental</strong></TableCell>
                <TableCell><strong>Governance</strong></TableCell>
              </TableRow>
            </TableHead>
            <ScoreTableBody data={top10Nasdaq} scoreFields={['average_score', 'social', 'environmental', 'governance']} />
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}