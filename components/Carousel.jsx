'use client';

import { Box, Card, CardContent, Typography, Button } from '@mui/joy';
import Image from 'next/image';
import { useState } from 'react';
import test1 from '/public/test1.png';
import test2 from '/public/test2.png';

const testimonials = [
    {
        image: test1,
        quote: `This is perfect!`,
      },
    {
      image: test2,
      quote: "We're already using your API!",
    },
  ];
  

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % testimonials.length);
  const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <Box textAlign="center">
      <Card variant="soft" sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
        <Box display="flex" justifyContent="center">
          <Image
            src={testimonial.image}
            alt={testimonial.quote}
            width={300}
            height={200}
            style={{ marginBottom: '1rem', objectFit: 'cover' }}
          />
        </Box>
  
        <CardContent>
          <Typography level="body-md" fontStyle="italic" mb={1} >
            “{testimonial.quote}”
          </Typography>
          <Typography level="body-sm" color="neutral">{testimonial.name}</Typography>
        </CardContent>
      </Card>
  
      <Box mt={2} display="flex" justifyContent="center" gap={2}>
        <Button size="sm" color='success' onClick={handlePrev}>{'<'}</Button>
        <Button size="sm" color='success' onClick={handleNext}>{'>'}</Button>
      </Box>
    </Box>
  );
  
}
