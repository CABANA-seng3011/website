'use client';

import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { Sheet } from '@mui/joy';
import { ScoreMeter } from './ScoreTableBody';
import { ESGCategories } from '@/helpers/data';

function ESGTable ({ scores }) {
  const scoreMap = scores.reduce((acc, item) => {
    acc[item.category] = item.score;
    return acc;
  }, {});

  return (
    <Sheet variant="outlined" sx={{ borderRadius: 'sm', overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              {ESGCategories.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {ESGCategories.map((field) => (
                <TableCell key={field}>
                  <ScoreMeter score={scoreMap[field] ?? 0} />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Sheet>
  )
}

export default function CompanyOverview({ scores }) {
  return (
    <Box>
      <Typography>
        STOCK Ticker:
      </Typography>
      <ESGTable scores={scores} />
    </Box>
  );
}