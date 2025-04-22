'use client';

import { useRouter } from 'next/navigation';
import { Button, Box } from '@mui/joy';

export default function GetStartedButton() {
  const router = useRouter();

  return (
    <Box textAlign='center'>
      <Button
        size='lg'
        color='success'
        onClick={() => router.push('/search')}
      >
        Get Started!
      </Button>
    </Box>
  );
}
