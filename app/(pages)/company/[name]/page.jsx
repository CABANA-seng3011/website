'use client';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function CompanyPage({ params }) {
  const unwrappedParams = React.use(params);
  const [company, setCompany] = useState('Loading...');

  useEffect(() => {
    if (unwrappedParams?.name) {
      setCompany(decodeURIComponent(unwrappedParams.name));
    } else {
      setCompany('Error loading company name');
    }
  }, [unwrappedParams]);

  return (
    <Box p={10}>
      <Typography variant="h4">{company}</Typography>
    </Box>
  );
}