'use client'

import TitlePanel from "@/components/TitlePanel";
import { fetchNasdaq100Category } from "@/helpers/requests";
import { Box, Container } from "@mui/joy";
import { useState, useEffect } from "react";
import { govOpp10, govRisk10 } from "@/app/data";
import ScoreDisplay from "@/components/ScoreDisplay";

export default function () {
  const [opp, setOpp] = useState(govOpp10);
  const [risk, setRisk] = useState(govRisk10);

  useEffect(() => {
    const fetchData = async () => {
      const o = await fetchNasdaq100Category('Governance Opportunity');
      const r = await fetchNasdaq100Category('Governance Risk');
      setOpp(o);
      setRisk(r);

    };

    fetchData();
  }, []);

  return (
    <Box>
      <TitlePanel text='TOP 10 Environmental' />
      <Container>
        <ScoreDisplay opp={opp} risk={risk} />
      </Container>
    </Box>
  )
}