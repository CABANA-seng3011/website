'use client';

import { useState } from 'react';
import { Input, Button, Box, Stack, Slider, Container, Drawer } from '@mui/joy';
import { Select, Option } from '@mui/joy';
import { Card, CardContent } from '@mui/material'

/*
ESG Categories are opp and risk for each ESG
*/

export default function FilterSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [country, setCountry] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState('')

  const handleSearch = () => {
    const filters = {
      searchQuery,
      startDate,
      endDate,
      country,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    console.log('Applied Filters:', filters);
  };

  const handleClearFilters = () => {
    setStartDate('');
    setEndDate('');
    setCountry('');
    setPriceRange([0, 1000]);
  };

  return (
    <Card className="p-4 space-y-4 max-w-2xl mx-auto">
      <CardContent className="space-y-10 flex items-center justify-between">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => setShowFilters(true)}
            variant="outlined"
          >
            Show Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant="outlined"
            color="neutral"
          >
            Clear Filters
          </Button>
        </Stack>
      </CardContent>
      <Drawer
        anchor="right"
        open={showFilters}
        onClose={() => setShowFilters(false)}
      >
        <Box px='10' py='10'>
          Company Information
          <Select
            placeholder="Select Country"
            value={country}
            onChange={(e, value) => setCountry(value)}
            >
            <Option value="USA">USA</Option>
            <Option value="UK">UK</Option>
            <Option value="Canada">Canada</Option>
          </Select>
          <Select
              placeholder="Select Category"
              value={category}
              onChange={(e, value) => setCategory(value)}
            >
              <Option value='eOpp'>Environmental Opportunity</Option>
              <Option value='eRisk'>Environemental Risk</Option>
              <Option value='sOpp'>Social Opportunity</Option>
              <Option value='sRisk'>Social Risk</Option>
              <Option value='gOpp'>Governance Opportunity</Option>
              <Option value='gRisk'>Governance Risk</Option>
            </Select>
            Stock Information
            <Stack spacing='5' direction='row'>
              <Box>
                Start Date
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Box>
              <Box>
                End Date
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
      
                />
              </Box>
            </Stack>
            <Box>
              Price Range: ${priceRange[0]} - ${priceRange[1]}
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
              />
            </Box>
          <Button
            onClick={handleSearch}
            className="bg-gray-500 text-white w-full"
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </Card>
  );
}