'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { envOpp10, envRisk10, trendingDesc } from "@/app/data";
import OppRiskDisplay from "@/components/OppRiskDisplay";

export default function () {
  const [opp, setOpp] = useState(envOpp10);
  const [risk, setRisk] = useState(envRisk10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const o = await fetchNasdaq100Category('Environmental Opportunity', true);
  //     const r = await fetchNasdaq100Category('Environmental Risk', true);
  //     setOpp(o);
  //     setRisk(r);

  //   };

  //   fetchData();
  // }, []);

  return (
    <Box py={5}>
      <TitlePanel title='TOP 10 Environmental' body={trendingDesc} />
      <Container>
        <OppRiskDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}