import { Box, Stack } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import { GreenBox } from '@/components/GreenBox';

export default function TrendingPage() {
  return (
    <Box>
      <TitlePanel text='TOP 10 PICKS' />
      <Box my={10} mx={30}>
        <Box display='flex' justifyContent='center' width='100%' >
          <GreenBox text='NASDAQ-100' width='100%' height={170} href='/trending/top10' />
        </Box>
        <Stack py={5} direction='row' justifyContent='space-between' >
          <GreenBox text='Environmental' width={300} height={170} href='/trending/top10' />
          <GreenBox text='Social' width={300} height={170} href='/trending/top10' />
          <GreenBox text='Governance' width={300} height={170} href='/trending/top10' />
        </Stack>
      </Box>
    </Box>
  )
}