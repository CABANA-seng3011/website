'use client';
import { useEffect, useState } from 'react';
import { Box, Typography, Container, Tabs, Tab, TabList, TabPanel } from '@mui/joy';
import React from 'react';
import TitlePanel from '@/components/TitlePanel';
import { fetchFinOverview, fetchGetMetrics, fetchNasdaq100Company, fetchTicker } from '@/helpers/requests';
import CompanyOverview from '@/components/CompanyOverview';
import DataDisplay from '@/components/DataDisplay';

const bodyText = 'Hey';

function SideTabs({ env, soc, gov }) {
  return (
    <Tabs orientation="vertical" size="lg">
      <TabList>
        <Tab variant="soft">Environmental</Tab>
        <Tab variant="soft">Social</Tab>
        <Tab variant="soft">Governance</Tab>
      </TabList>
      <TabPanel value={0}>
        <DataDisplay />
      </TabPanel>
      <TabPanel value={1}></TabPanel>
      <TabPanel value={2}><b>Third</b> tab panel</TabPanel>
    </Tabs>
  );
}

function TopTabs({ overview }) {
  return (
    <Tabs orientation="horizontal" size="lg" sx={{ flexGrow: 1 }}>
      <TabList sx={{ justifyContent: 'center' }}>
        <Tab variant="soft" color="success">Overview</Tab>
        <Tab variant="soft" color="success">ESG Metrics</Tab>
        <Tab variant="soft" color="success">Finances</Tab>
        <Tab variant="soft" color="success">News</Tab>
      </TabList>
      <TabPanel value={0}>
        <CompanyOverview scores={overview} />
      </TabPanel>
      <TabPanel value={1}><SideTabs /></TabPanel>
      <TabPanel value={2}></TabPanel>
      <TabPanel value={3}><b>Third</b> tab panel</TabPanel>
    </Tabs>
  );
}

export default function CompanyPage({ params }) {
  const unwrappedParams = React.use(params);
  const [scores, setScores] = useState(null);
  const [company, setCompany] = useState(null);
  const [fin, setFin] = useState(null);
  const [env, setEnv] = useState();
  const [soc, setSoc] = useState();
  const [gov, setGov] = useState();
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
        setEnv(await fetchGetMetrics('Environmental Opportunity', companyName))
      } catch (err) {
        console.error('Failed to fetch financial overview:', err);
        setFin(null);
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
          <Typography level="h4" textAlign="center" mt={5}>
            Loading financial data...
          </Typography>
        ) : (
          <TopTabs overview={scores} />
        )}
      </Container>
    </Box>
  );
}