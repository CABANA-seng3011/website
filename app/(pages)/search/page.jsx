'use client';

import { Box, Stack } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import { GreenBox } from '@/components/GreenBox';
import { Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const comp_constants = [
  {
    name: 'Apple Inc.',
    ticker: 'AAPL',
    scores: {
      environmental: 82,
      social: 76,
      governance: 88,
    },
    stockPrice: 150,
  },
  {
    name: 'Microsoft Corporation',
    ticker: 'MSFT',
    scores: {
      environmental: 90,
      social: 80,
      governance: 85,
    },
    stockPrice: 250,
  },
  {
    name: 'Tesla, Inc.',
    ticker: 'TSLA',
    scores: {
      environmental: 85,
      social: 70,
      governance: 78,
    },
    stockPrice: 220,
  }
];

function Description() {
  return (
    <Box display='flex' justifyContent='center' mx={30} my={5} >
      <Typography level='subtitle' textAlign='center'>
        Type the name of the organisation you are looking for in the search bar above. 
        <br />
        Filter company results based off of overall environmental, social or governance scores and stock price.
      </Typography>
    </Box>
  )
}

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(comp_constants);

  const handleSearch = (value) => {
    const filtered = comp_constants.filter(company =>
      company.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <Box>
      <TitlePanel text="Looking for a specific organisation?">
        <Autocomplete
          freeSolo
          options={comp_constants}
          getOptionLabel={(option) => option.name}
          onInputChange={(event, value) => setSearchValue(value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch(searchValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search organisations..."
              variant="outlined"
              sx={{ width: '500px' }}
              InputProps={{
                ...params.InputProps,
                sx: { borderRadius: '5px', backgroundColor: '#fff' },
                endAdornment: (
                  <InputAdornment position="end" onClick={() => handleSearch(searchValue)}>
                    <SearchIcon sx={{ color: '#81C784', cursor: 'pointer' }} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </TitlePanel>
      <Description />
      <Box mt={5} mx={30} sx={{ padding: '20px', borderRadius: '8px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Company Name</strong></TableCell>
                <TableCell><strong>Ticker</strong></TableCell>
                <TableCell><strong>Environmental</strong></TableCell>
                <TableCell><strong>Social</strong></TableCell>
                <TableCell><strong>Governance</strong></TableCell>
                <TableCell><strong>Stock Price</strong></TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCompanies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.ticker}</TableCell>
                  <TableCell>{company.scores.environmental}</TableCell>
                  <TableCell>{company.scores.social}</TableCell>
                  <TableCell>{company.scores.governance}</TableCell>
                  <TableCell>{company.stockPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
