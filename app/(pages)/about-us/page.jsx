'use client';

import { Container, Grid, Box, Typography, Card, CardContent, Button } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroImage from '/public/home_guy.png';
import collabImage from '/public/collab.jpg';
import GetStartedButton from '@/components/GetStartedButton';
import FlipCard from '../../../components/FlipCard';
import Carousel from '../../../components/Carousel';

const enviroDesc = 'The environmental pillar focuses on sustainability efforts and the impact of organisational practices on the planet.'
const socialDesc = 'The social pillar addresses community well-being, labor practices, and social responsibility.'
const govDesc = 'The governance pillar emphasises corporate transparency, leadership integrity, and regulatory compliance.'
const esgItems = [
  {
    title: 'Environmental',
    description: enviroDesc,
    imageAlt: 'Green outlined icon of a building icon',
    imagePath: '/enviro.png',
  },
  {
    title: 'Social',
    description: socialDesc,
    imageAlt: 'Green outlined icon of a group of people icon',
    imagePath: '/social.png',
  },
  {
    title: 'Governance',
    description: govDesc,
    imageAlt: 'Green outlined icon of a three hands facing each other',
    imagePath: '/gov.png',
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <Box>
      {/* Hero Section */}
      <Box className='silver-bg' pt={13} pb={10}>
        <Container>
          <Grid container spacing={5} alignItems='center'>
            <Grid xs={12} md={6}>
              <TitlePanel
                title={
                  <>
                    All your ESG data needs<br />
                    <span style={{ color: '#4CAF50' }}>in one place</span>
                  </>
                }
                body="Environmental, social and governance data at your fingertips!"
              />
              <GetStartedButton />
            </Grid>

            <Grid xs={12} md={6}>
              <Box display='flex' justifyContent='center'>
                <Image
                  src={heroImage}
                  alt='ESG data illustration'
                  style={{ maxWidth: '65%', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section: What is ESG Data? */}
      <Box py={10} textAlign='center'>
        <Typography level='h2' fontSize='2rem' mb={1}>
          What is ESG Data?
        </Typography>
        <Typography level='body-md' mb={2} width='1000px' mx='auto'>
          ESG data helps paint a clearer picture of how a company is doing when it comes to the environment, social impact, and how it's run.
          <br />
          More and more investors are using ESG data 
          to make smarter, more informed and more successful decisions.
          <br/>
          <b>Click on each to learn more</b>
        </Typography>
        <Grid container spacing={2} justifyContent="center" width="80%" mx="auto">
          {esgItems.map(({ title, description, imagePath, imageAlt }) => (
            <Grid 
              key={title} 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              display="flex" 
              justifyContent="center"
            >
              <FlipCard
                imagePath={imagePath}
                imageAlt={imageAlt}
                cardTitle={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>


      </Box>

      {/* Section: Stats Section */}
      <Box py={10} textAlign='center' sx={{ backgroundColor: '#F5F7FA' }}>
        <Typography level='h2' fontSize='2rem' mb={1}>
          Containing a <span style={{ color: '#4CAF50' }}>wealth</span> of data
        </Typography>
        <Typography level='body-md' mb={4}>
          We offer a widespread selection of metrics for analysis from organisation across the globe to give you the best insights possible.
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {[
            ['90+', 'companies'],
            ['100+', 'metrics'],
            ['6', 'unique features'],
            ['0', 'ads'],
          ].map(([value, label]) => (
            <Grid key={label} xs={6} sm={3}>
              <Box>
                <Typography level='h3' fontSize='1.8rem' color='success'>
                  {value}
                </Typography>
                <Typography level='body-sm'>{label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Section: How to Use */}
      <Box py={10}>
        <Grid container spacing={4} alignItems='center'>
          <Grid xs={12} md={6}>
            <Image
              src={collabImage}
              alt='how to use graphic'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              backgroundColor: '#F5F7FA',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: 4,
            }}
          >
            <Typography level='h2' fontSize='1.8rem' mb={2}>
              Using our website
            </Typography>
            <Typography level='body-md' mb={2} width='600px'>
              We offer the ability to see trending companies, compare companies, and view specific company profiles.
              <br/>
              See how well each company is performing in each of the three ESG pillars, as well as stock price to ensure that you are making the best decision possible.
            </Typography>
            <Box mt={5} sx={{ alignSelf: 'flex-start' }}>
              <GetStartedButton />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Section: Testimonials Carousel */}
      <Box py={10} sx={{ backgroundColor: '#F0F4F8' }}>
        <Typography level='h2' fontSize='2rem' mb={4} textAlign="center">
          Hear what our users have to say!
        </Typography>
        <Carousel />
      </Box>
    </Box>
  );
}
