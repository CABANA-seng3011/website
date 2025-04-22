import { Typography, Box } from '@mui/material';
import Link from 'next/link';

export function GreenBox ({text, height, width, href}) {
  return (
    <Box
      component={Link}
      href={href}
      width={width}
      height={height}
      borderRadius='30px'
      className='green-bg'
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#43A046',
        },
      }}
    >
      <Typography align='center' overflow='wrap' fontSize='2rem'>
        <b>{text}</b>
      </Typography>
    </Box>
  );
}