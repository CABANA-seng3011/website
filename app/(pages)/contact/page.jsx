'use client'; 

import React from 'react';
import { Box, Stack, Input, Button, Textarea, Typography } from '@mui/joy';
import TitlePanel from '@/components/TitlePanel';

export default function ContactUs() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [confirmation, setConfirmation] = React.useState('');

  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`

  const handleSubmitClick = () => {
    if (!firstName || !lastName || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message
    };
    console.log('Form Data:', formData);

    // Clear fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setConfirmation('Message sent');
  };

  return (
    <Stack>
      <TitlePanel title='Contact Us' body={bodyText} />
      <Stack spacing={5} mt={10} pb={4} alignItems='center'>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='First Name' variant='outlined' value={firstName} onChange={e => setFirstName(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Last Name' variant='outlined' value={lastName} onChange={e => setLastName(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
        </Box>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='Email Address' variant='outlined' value={email} onChange={e => setEmail(e.target.value)}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Contact Number' variant='outlined' value={phone} onChange={e => setPhone(e.target.value)}
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
          value={message}
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
        {confirmation && <Typography level="body-sm" color="success">{confirmation}</Typography>}
      </Stack>
    </Stack>
  );
}
