import { Box, Stack } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import { GreenBox } from '@/components/GreenBox';
import { Typography } from '@mui/material';

function Description() {
  return (
    <Box display='flex' justifyContent='center' mx={30} my={5} >
      <Typography level='subtitle' textAlign='center'>
        Unsure? Confused? Don't know what you're looking for? 
        <br />
        CABANA offers a selectedly crafted TOP 10 for your convenience. 
      </Typography>
    </Box>
  )
}

export default function TrendingPage() {
  return (
    <Box>
      <TitlePanel text='TOP 10 PICKS' />
      <Description />
      <Box mt={5} mx={30}>
        <Box display='flex' justifyContent='center' width='100%' >
          <GreenBox text='NASDAQ-100' width='100%' height={170} href='/trending/top10' />
        </Box>
        <Stack py={5} direction='row' justifyContent='space-between' >
          <GreenBox text='Environmental' width={300} height={170} href='/trending/top10env' />
          <GreenBox text='Social' width={300} height={170} href='/trending/top10social' />
          <GreenBox text='Governance' width={300} height={170} href='/trending/top10gov' />
        </Stack>
      </Box>
    </Box>
  )
}