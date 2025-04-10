'use client';

import { Container, Typography, Stack } from '@mui/material';
import FlipCard from '../../../components/FlipCard';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Panel from '../../../components/Panel';
import { esgDesc1, esgDesc2 } from '../../../public/data';

const enviroDesc = 'The environmental pillar focuses on sustainability efforts and the impact of organisational practices on the planet.'
const socialDesc = 'The social pillar addresses community well-being, labor practices, and social responsibility.'
const govDesc = 'The governance pillar emphasises corporate transparency, leadership integrity, and regulatory compliance.'


export default function ESGPage() {
  return (
    <>
      <Panel text='The ESG Pillars' imagePath='/earth.webp' imageAlt='Picture of the earth' />
      <Container 
        maxWidth='lg'
        height='100vh'
        py='4'
      >
        <Typography 
          textAlign='center' 
          variant='h6' 
          sx={{
            margin: '30px 0', 
            fontWeight: 'bold',
          }}
        >
          {esgDesc1}
        </Typography>
        <Typography 
          textAlign='center' 
          variant='h6' 
          sx={{
            margin: '30px 0',
            fontWeight: 'bold',
          }}
        >
          {esgDesc2}
        </Typography>
        <Stack 
          direction='row' 
          spacing={6} 
          justifyContent='center' 
          alignItems='center'
        >
          <FlipCard imagePath='/enviro.jpeg' imageAlt='Graphic of a tree' cardTitle='Environmental' description={enviroDesc} />
          <FlipCard imagePath='/social.jpg' imageAlt='Graphic of people and a globe' cardTitle='Social' description={socialDesc} />
          <FlipCard imagePath='/govern.png' imageAlt='Graphic of people and a cog'  cardTitle='Governance' description={govDesc} />
        </Stack>
      </Container>
      <Footer/>
    </>
  );
}