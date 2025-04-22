'use client';

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchNasdaq100Category } from '@/helpers/requests';
import ScoreTableBody from '@/components/ScoreTableBody';
import { top10Nasdaq } from '@/helpers/data';
import { Box, Container } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';

const bodyText = 'This list provides a ranked view of Nasdaq-100 companies based on their overall ESG score. The higher the score, the better the company performed in relevant ESG metrics. The scores are calculated by averaging the scores from the three main categories: Social, Environmental, and Governance. Each pillar has been calculated by averaging the scores from the respective opportunity and risk categories.';

const categories = [
  'Social Opportunity',
  'Social Risk',
  'Environmental Opportunity',
  'Environmental Risk',
  'Governance Opportunity',
  'Governance Risk',
];

function average(arr) {
  const valid = arr.filter(v => typeof v === 'number');
  if (valid.length === 0) return null;
  const sum = valid.reduce((a, b) => a + b, 0);
  return sum / valid.length;
}


export default function () {
  const [companyData, setCompanyData] = useState(top10Nasdaq);

  useEffect(() => {
    const fetchData = async () => {
      const scoreMap = {};

      for (const category of categories) {
        try {
          const res = await fetchNasdaq100Category(category, false);
          for (const { company_name, score } of res) {
            if (!scoreMap[company_name]) {
              scoreMap[company_name] = { company_name, total: 0, count: 0 };
            }

            scoreMap[company_name].total += score;
            scoreMap[company_name].count += 1;
            scoreMap[company_name][category.trim()] = score;
          }
        } catch (err) {
          console.error(`Failed to fetch ${category}`, err);
        }
      }

      const final = Object.values(scoreMap).map(entry => {
        const social = average([entry['Social Opportunity'], entry['Social Risk']]);
        const environmental = average([entry['Environmental Opportunity'], entry['Environmental Risk']]);
        const governance = average([entry['Governance Opportunity'], entry['Governance Risk']]);
      
        const average_score = average([social, environmental, governance]);
      
        return {
          company_name: entry.company_name,
          social: +social.toFixed(4),
          environmental: +environmental.toFixed(4),
          governance: +governance.toFixed(4),
          average_score: +average_score.toFixed(4),
        };
      });
      console.log(final);
      final.sort((a, b) => b.average_score - a.average_score);
      setCompanyData(final);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <TitlePanel title='All Nasdaq-100 Scores' body={bodyText}/>
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
            <ScoreTableBody data={companyData} scoreFields={['average_score', 'social', 'environmental', 'governance']} />
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}