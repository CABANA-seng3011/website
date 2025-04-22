import { Box, Container, Typography, Stack } from '@mui/joy'

export default function TitlePanel({ title, body }) {
  return (
    <Box className='silver-bg' top={0} mb={5}>
      <Container>
        <Stack spacing={3} direction='column' textAlign='center' pb={5}>
          <Typography
            level='h1'
            pt={10}
            sx={{
              pt: '120px',
              textAlign: 'center',
              fontSize: '2.5rem'
            }}
          >
            {title}
          </Typography>
          <Typography
              level='body'
            >
              {body}
            </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
