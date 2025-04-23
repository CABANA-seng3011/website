import { Box, Typography, TextField, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
export default function Footer() {
  return (
    <Box
      position='static'
      bottom={0}
      component='footer'
      sx={{
        backgroundColor: '#263238',
        color: '#fff',
        px: 6,
        py: 6,
        mt: 8,
      }}
    >
      <Box display='flex' justifyContent='space-evenly' alignItems='flex-start' flexWrap='wrap'>
        <Box>
          <Image src='/cabana_white.png' alt='Cabana Logo' width={300} height={110} />
        </Box>

        {/* Company Links */}
        <Box>
          <Typography variant='subtitle1' fontWeight='bold' mb={1}>
            Want to know more?
            <br/> 
            Check out these links below!

          </Typography>
          <Stack spacing={0.5}>
            <Link href='/' underline='hover' color='inherit'>About us</Link>
            <Link href='/contact' underline='hover' color='inherit'>Contact us</Link>
          </Stack>
        </Box>

        {/* Email Signup */}
        <Box>
          <Typography variant='subtitle1' fontWeight='bold' mb={1}>
            Stay up to date
          </Typography>
          <TextField
            placeholder='Your email address'
            variant='filled'
            size='large'
            sx={{
              backgroundColor: '#455A64',
              borderRadius: '8px',
              width: 300,
              input: {
                color: '#fff',
                fontSize: '14px', // increase font size for text
                padding: '14px 12px', // adjust padding to center the text
                '::placeholder': {
                  color: '#fff',
                  fontSize: '18px', // increase font size for placeholder
                  opacity: 0.8,
                },
              },
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end'>
                    <SendIcon sx={{ color: '#fff', width: '50px' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
