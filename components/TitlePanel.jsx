import { Box, Typography } from '@mui/joy';

export default function TitlePanel({ text, children }) {
  return (
    <Box className='silver-bg' top={0} sx={{ pt: '120px', pb: '60px' }}>
      <Typography
        level='h1'
        sx={{
          textAlign: 'center',
          fontSize: '2.5rem',
          mb: 4
        }}
      >
        {text}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '60px' }}>
        {children}
      </Box>
    </Box>
  );
}
