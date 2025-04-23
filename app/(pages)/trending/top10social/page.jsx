'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { socialOpp10, socialRisk10, trendingDesc } from "@/helpers/data";
import OppRiskDisplay from "@/components/OppRiskDisplay";

export default function () {
  const [opp, setOpp] = useState(socialOpp10);
  const [risk, setRisk] = useState(socialRisk10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const o = await fetchNasdaq100Category('Social Opportunity');
  //     const r = await fetchNasdaq100Category('Social Risk');
  //     setOpp(o);
  //     setRisk(r);

  //   };

  //   fetchData();
  // }, []);

  return (
    <Box py={5}>
      <TitlePanel title='TOP 10 Social' body={trendingDesc}/>
      <Container>
        <OppRiskDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}