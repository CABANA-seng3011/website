'use client';

import { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Checkbox, ListItemText, Select, InputLabel, FormControl } from '@mui/material';
import DataDisplay from '../../../components/DataDisplay';
import Panel from '../../../components/Panel';

export default function getRouteDemo() {
  const [category, setCategory] = useState('environmental_risk');
  const [columns, setColumns] = useState([]); // Array to hold selected columns
  const [conditions, setConditions] = useState({}); // Store conditions for each column
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const categories = [
    'environmental_opportunity',
    'environmental_risk',
    'governance_opportunity',
    'governance_risk',
    'social_opportunity',
    'social_risk',
  ];

  // Define available columns with descriptions
  const availableColumns = [
    { value: 'company_name', label: 'Company Name' },
    { value: 'perm_id', label: 'Permanent ID' },
    { value: 'data_type', label: 'Data Type' },
    { value: 'disclosure', label: 'Disclosure' },
    { value: 'metric_description', label: 'Metric Description' },
    { value: 'metric_name', label: 'Metric Name' },
    { value: 'metric_unit', label: 'Metric Unit' },
    { value: 'metric_value', label: 'Metric Value' },
    { value: 'metric_year', label: 'Metric Year' },
    { value: 'nb_points_of_observations', label: 'Number of Observations' },
    { value: 'metric_period', label: 'Metric Period' },
    { value: 'provider_name', label: 'Provider Name' },
    { value: 'reported_date', label: 'Reported Date' },
    { value: 'pillar', label: 'Pillar' },
    { value: 'headquarter_country', label: 'Headquarter Country' },
    { value: 'category', label: 'Category' },
  ];

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    // Prepare conditions based on input fields
    const queryConditions = {};

    // Add conditions for selected columns
    columns.forEach((column) => {
      const condition = conditions[column];
      if (condition) {
        queryConditions[column] = condition;
      }
    });

    // Create the query parameters (including category and selected columns)
    const params = new URLSearchParams({ category });

    // Include the selected columns in the API request
    if (columns.length > 0) {
      params.append('columns', columns.join(','));
    }

    // Append conditions to the query string
    Object.entries(queryConditions).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    // Send the request
    try {
      const response = await fetch(`http://127.0.0.1:5000/get?${params.toString()}`);
      const result = await response.json();
      
      console.log("API Response:", result); // Log the full response

      const data = JSON.parse(result)
      setData(data.events)
      // // Check if events exists in the response
      // if (result && result.events) {
      //   setData(result.events); // Set the events data
      //   setFetched(true);
      // } else {
      //   throw new Error('Events data not found in the response');
      // }
      console.log(data.events)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
      setFetched(true);
    }
  };

  const handleColumnSelection = (event) => {
    const selectedColumns = event.target.value;
    setColumns(selectedColumns);

    // Add new condition inputs for selected columns
    const newConditions = { ...conditions };
    selectedColumns.forEach((column) => {
      if (!newConditions[column]) {
        newConditions[column] = ''; // Default condition value
      }
    });
    setConditions(newConditions);
  };

  const handleConditionChange = (column, value) => {
    setConditions({ ...conditions, [column]: value });
  };

  return (
    <Box className='flex flex-col items-center justify-center min-h-screen space-y-6'>
      <Panel text='Demo for /get' imagePath={null} imageAlt='null' />
      <Typography variant='h4' className='font-bold'>ESG Data Viewer</Typography>
      
      <TextField
        select
        label='Category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='w-80'
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>{cat}</MenuItem>
        ))}
      </TextField>

      {/* Multi-check dropdown for columns */}
      <FormControl className="w-80">
        <InputLabel>Columns</InputLabel>
        <Select
          multiple
          value={columns}
          onChange={handleColumnSelection}
          renderValue={(selected) => selected.join(', ')}
        >
          {availableColumns.map((column) => (
            <MenuItem key={column.value} value={column.value}>
              <Checkbox checked={columns.indexOf(column.value) > -1} />
              <ListItemText primary={column.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Conditionally render input fields for each selected column */}
      {columns.map((column) => (
        <TextField
          key={column}
          label={`Condition for ${column}`}
          value={conditions[column]}
          onChange={(e) => handleConditionChange(column, e.target.value)}
          className='w-80'
          variant="outlined"
        />
      ))}

      <Button variant='contained' onClick={handleFetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </Button>

      {error && <Typography color='error'>{error}</Typography>}

      {/* Display the fetched events data in a table */}
      {!loading && fetched ? <DataDisplay data={data} /> : null}
    </Box>
  );
}