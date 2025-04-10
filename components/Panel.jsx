import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function Panel({ text, imagePath, imageAlt }) {
  return (
    <Box sx={{ position: 'relative', maxWidth: '100%', height: '500px', overflow: 'hidden' }}>
      <Image
        unoptimized
        src={imagePath}
        alt={imageAlt}
        width={3000}
        height={100}
        layout='intrinsic'
        objectFit='cover'
      />
      <Typography
        variant='h1'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: '0.05em',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Panel;