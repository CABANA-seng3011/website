'use client';

import { Box, Stack } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import { GreenBox } from '@/components/GreenBox';
import { Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import comp_constants from '@/app/(pages)/search/company_data.jsx';
import { useRouter } from 'next/navigation';


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

  const router = useRouter();

  return (
    <Box py={5}>
      <TitlePanel title='Looking for a specific organisation?' />
        <Box className='silver-bg' pb={7} display='flex' justifyContent='center'>
          <Autocomplete
            className='white-bg'
            mt={3}
            freeSolo
            options={comp_constants}
            getOptionLabel={(option) => option.name}
            onInputChange={(event, value) => setSearchValue(value)} // update search value as user types
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch(searchValue);
            }}
            onBlur={() => handleSearch(searchValue)} // trigger search when input loses focus
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search organisations...'
                variant='outlined'
                sx={{ width: '50vw', borderRadius: '5px' }}
                slotProps={{
                  ...params.InputProps,
                  sx: { borderRadius: '5px', backgroundColor: '#fff' },
                  endAdornment: (
                    <InputAdornment position='end' onClick={() => handleSearch(searchValue)}>
                      <SearchIcon sx={{ color: '#81C784', cursor: 'pointer' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
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
                <TableRow 
                  key={index}
                  hover
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                  onClick={() => router.push(`/company/${encodeURIComponent(company.company_name)}`)}
                >
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
