'use client';

import { Box, Card, CardContent, Typography } from '@mui/joy';
import Image from 'next/image';

const testimonials = [
  {
    image: '/test1.png',
    quote: `This is perfect!`,
  },
  {
    image: '/test2.png',
    quote: "We're already using your API!",
  },
];

export default function TestimonialsGrid() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={6}
      sx={{ mt: 4 }}
    >
      {testimonials.map((testimonial, idx) => (
        <Card
          key={idx}
          variant="soft"
          sx={{
            width: 320,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            textAlign: 'center',
          }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.quote}
            width={280}
            height={180}
            style={{ marginBottom: '1rem', objectFit: 'cover' }}
            placeholder="empty"
            />

          <CardContent>
            <Typography level="body-md" fontStyle="italic" mb={1}>
              “{testimonial.quote}”
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
