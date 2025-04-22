'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { govOpp10, govRisk10, trendingDesc } from "@/app/data";
import OppRiskDisplay from "@/components/OppRiskDisplay";

export default function () {
  const [opp, setOpp] = useState(govOpp10);
  const [risk, setRisk] = useState(govRisk10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const o = await fetchNasdaq100Category('Governance Opportunity');
  //     const r = await fetchNasdaq100Category('Governance Risk');
  //     setOpp(o);
  //     setRisk(r);

  //   };

  //   fetchData();
  // }, []);

  return (
    <Box py={5}>
      <TitlePanel title='TOP 10 Environmental' body={trendingDesc}/>
      <Container>
        <OppRiskDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}