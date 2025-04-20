import { Box, Typography } from '@mui/joy'

export default function TitlePanel({ text }) {
  return (
    <Box className='silver-bg' top={0}>
      <Typography
        level='h1'
        py={10}
        sx={{
          pt: '120px',
          textAlign: 'center',
          fontSize: '2.5rem'
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}