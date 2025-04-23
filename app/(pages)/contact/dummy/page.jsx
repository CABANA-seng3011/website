'use client'; 

import React from 'react';
import { Box, Stack, Input, Button, Textarea } from '@mui/joy';
import Panel from '@/components/Panel';

export default function ContactUs() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`

  const handleSubmitClick = () => {
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message
    };
    console.log('Form Data:', formData);
  };

  return (
    <Stack>
      <Panel text='Contact Us' imagePath='/earth.webp' imageAlt='Picture of the earth' />
      <Stack spacing={5} mt={10} pb={4} alignItems='center'>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='First Name' variant='outlined' onChange={e => setFirstName(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Last Name' variant='outlined' onChange={e => setLastName(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
        </Box>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='Email Address' variant='outlined' onChange={e => setEmail(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Contact Number' variant='outlined' onChange={e => setPhone(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
        </Box>
        <Textarea
          className='dark-blue'
          placeholder="Message"
          minRows={15}
          onChange={e => setMessage(e.target.value)}
          style={{
            width: '70%',
            resize: 'vertical',
            paddingTop: '2.5%', 
            paddingLeft: '3%',
            fontSize:'0.9em'
          }}
        />
        <Box>
          <Button variant='solid' color='primary' onClick={handleSubmitClick}>
            Submit
          </Button>
        </Box>  
      </Stack>
    </Stack>
  );
}