'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { envOpp10, envRisk10 } from "@/app/data";
import ScoreDisplay from "@/components/ScoreDisplay";

export default function () {
  const [opp, setOpp] = useState(envOpp10);
  const [risk, setRisk] = useState(envRisk10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const o = await fetchNasdaq100Category('Environmental Opportunity');
  //     const r = await fetchNasdaq100Category('Environmental Risk');
  //     setOpp(o);
  //     setRisk(r);

  //   };

  //   fetchData();
  // }, []);

  return (
    <Box>
      <TitlePanel text='TOP 10 Environmental' />
      <Container>
        <ScoreDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}