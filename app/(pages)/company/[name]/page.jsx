'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Container, Tabs, Tab, TabList, TabPanel, Stack } from '@mui/joy';
import React from 'react';
import TitlePanel from '@/components/TitlePanel';
import { fetchFinOptions, fetchFinOverview, fetchGetMetrics, fetchNasdaq100, fetchNasdaq100Company, fetchNewsSentiment, fetchTicker } from '@/helpers/requests';
import CompanyOverview from '@/components/CompanyOverview';
import DataDisplay from '@/components/DataDisplay';
import { LinearProgress } from '@mui/material';
import { ParkRounded, AccountBalanceRounded, GroupsRounded } from '@mui/icons-material';
import PillData from '@/components/PillData';
import FormatSummary from '@/components/FormatSummary';

const bodyText = 'Take a deeper look into how this company performs in ESG metrics, financial markets, and recent news stories';

function SideTabs({ metrics }) {
  const env = metrics.filter(item => item.category.includes('Environmental'));
  const soc = metrics.filter(item => item.category.includes('Social'));
  const gov = metrics.filter(item => item.category.includes('Governance'));

  return (
    <Tabs sticky={'top'} orientation='horizontal' size='lg' sx={{ flexGrow: 1 }}>
      <TabList sx={{ justifyContent: 'center' }}>
        <Tab variant='soft'>Environmental<ParkRounded /> </Tab>
        <Tab variant='soft'>Social <GroupsRounded /> </Tab>
        <Tab variant='soft'>Governance <AccountBalanceRounded /></Tab>
      </TabList>
      <TabPanel value={0}>
        <DataDisplay data={env} />
      </TabPanel>
      <TabPanel value={1}>
        <DataDisplay data={soc} />
      </TabPanel>
      <TabPanel value={2}>
        <Stack direction='column'>
          <DataDisplay data={gov} />
        </Stack>
      </TabPanel>
    </Tabs>
  );
}

function TopTabs({ overview, metrics, finOverview, finOptions, news }) {
  const fin = {'Market': finOverview.exchange, 'Ticker': finOverview.symbol, 'Current Price': finOverview.currentPrice, 'Day High': finOverview.dayHigh, 'Day Low': finOverview.dayLow, 'Market Cap': finOverview.marketCap, 'Volume': finOverview.volume};
  return (
    <Tabs orientation='horizontal' size='lg' sx={{ flexGrow: 1 }}>
      <TabList sx={{ justifyContent: 'center' }}>
        <Tab variant='soft' color='success'>Overview</Tab>
        <Tab variant='soft' color='success'>ESG Metrics</Tab>
        <Tab variant='soft' color='success'>Finances</Tab>
        <Tab variant='soft' color='success'>News</Tab>
      </TabList>
      <TabPanel value={0}>
        <CompanyOverview scores={overview} />
      </TabPanel>
      <TabPanel value={1}>
        <SideTabs metrics={metrics} />
      </TabPanel>
      <TabPanel value={2}>
        <Stack direction='column'>
          <Typography level='h3' sx={{ marginBottom: 2 }}>Overview</Typography>
          <PillData data={fin} />
          <Typography level='h3' sx={{ marginBottom: 2 }}>Options</Typography>
          <DataDisplay data={finOptions} />
        </Stack>
      </TabPanel>
      <TabPanel value={3}>
        <FormatSummary summary={news} />
      </TabPanel>
    </Tabs>
  );
}

export default function CompanyPage({ params }) {
  const unwrappedParams = React.use(params);
  const [scores, setScores] = useState(null);
  const [company, setCompany] = useState(null);
  const [fin, setFin] = useState(null);
  const [finOptions, setFinOptions] = useState(null);
  const [esgMetrics, setESGMetrics] = useState();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const companyName = unwrappedParams?.name ? decodeURIComponent(unwrappedParams.name) : null;
    if (!companyName) {
      setCompany('Error loading company name');
      setLoading(false);
      return;
    }

    setCompany(companyName);

    const fetchData = async () => {
      try {
        const scoreF = await fetchNasdaq100Company(companyName);
        setScores(scoreF);
        const ticker = await fetchTicker(companyName);
        setFin(await fetchFinOverview(ticker));
        setFinOptions(await fetchFinOptions(ticker));
        setESGMetrics(await fetchGetMetrics(companyName));
        setNews(await fetchNewsSentiment(ticker))
      } catch (err) {
        console.error('Failed to fetch:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [unwrappedParams]);

  return (
    <Box py={5}>
      <TitlePanel title={company || 'Loading...'} body={bodyText} />
      <Container>
        {loading ? (
          <LinearProgress color='success' sx={{ marginBottom: 20 }} />
        ) : (
          <TopTabs
            overview={scores}
            metrics={esgMetrics}
            finOverview={fin}
            finOptions={finOptions}
            news={news}
          />
        )}
      </Container>
    </Box>
  );
}