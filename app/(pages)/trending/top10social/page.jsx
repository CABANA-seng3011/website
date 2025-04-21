'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { socialOpp10, socialRisk10 } from "@/app/data";
import ScoreDisplay from "@/components/ScoreDisplay";

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
    <Box>
      <TitlePanel text='TOP 10 Social' />
      <Container>
        <ScoreDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}