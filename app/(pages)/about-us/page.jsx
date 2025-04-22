'use client';

import { Container, Grid, Box, Typography, Card, CardContent, Button } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroImage from '/public/home_guy.png';
import phoneGraphic from '/public/home_guy.png';
import GetStartedButton from '@/components/GetStartedButton';

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
        <Typography level='body-md' mb={2}>
          bla bla <br />
          paragraph ish on 3 sectors, pillar stuff we have rn <br />
          <b>Click on each to learn more</b>
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {['Environmental', 'Social', 'Governance'].map((item) => (
            <Grid key={item} xs={12} sm={4}>
              <Card variant='soft' sx={{ py: 4 }}>
                <CardContent>
                  <Typography level='title-md'>{item}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Section: Stats Section */}
      <Box py={10} textAlign='center' sx={{ backgroundColor: '#f7f7f7' }}>
        <Typography level='h2' fontSize='2rem' mb={1}>
          Containing a <span style={{ color: '#4CAF50' }}>wealth</span> of data
        </Typography>
        <Typography level='body-md' mb={4}>
          We offer a widespread selection of metrics for analysis
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {[
            ['X', 'companies'],
            ['X', 'metrics'],
            ['X', 'users'],
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
              src={phoneGraphic}
              alt='how to use graphic'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography level='h2' fontSize='1.8rem' mb={2}>
              How to use
            </Typography>
            <Typography level='body-md' mb={2}>
              Search a company, offer a score, use score to check out how well it's performing. <br />
              Gather info, look at news and finances related to that company as well. <br />
              Maybe make this numbered steps.
            </Typography>
            <Button color='success' onClick={() => router.push('/search')}>
              Get started (to search page)
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Section: Testimonials */}
      <Box py={10} textAlign='center'>
        <Typography level='h2' fontSize='1.8rem' mb={1}>
          Hear from our users
        </Typography>
        <Typography level='body-sm' mb={4}>"testimonials" lol</Typography>
        <Grid container spacing={2} justifyContent='center'>
          {[
            { text: 'LOVE', img: '/public/testimonial1.png' },
            { text: 'LOVE', img: '/public/testimonial2.png' },
            { text: 'ATE', img: '/public/testimonial3.png' },
          ].map(({ text, img }, idx) => (
            <Grid xs={12} sm={4} key={idx}>
              <Card>
                <Image
                  src={img}
                  alt={text}
                  width={400}
                  height={250}
                  style={{ width: '100%', height: 'auto' }}
                />
                <CardContent>
                  <Typography level='body-md' textAlign='center'>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
