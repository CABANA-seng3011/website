'use client'
import { Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import { navData } from '../app/data';
import React, { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import Box from '@mui/joy/Box';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SubMenu({ subData }) {
  return (
    <Menu
      variant='plain'
      placement='bottom-start'
      className='silver-bg'
      sx={{
        borderRadius: '0px 10px 10px 10px', 
        border: '0px'
      }}
    >
      {subData.map(({text,href}, idx) => (
        <MenuItem
          key={idx}
          component={Link}
          href={href}
          className='navbar-hover'
          sx={{
            borderLeft: '3px solid transparent',
            '&:hover': {
              borderLeftColor: '#33373D',
            },
            '&:focus': {
              outline: 'none',
            },
            zIndex: 1,
            padding: '13px 13px'
          }}
        >
          <Typography           
            level='subtitle-light'
            textAlign='left'
            sx= {{
              pl:'1px',
              pr:'1px',
              zIndex: 2
            }}
          >
              {text}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

function HeaderItem({ title, navigateTo, subData }) {
  const activePage = usePathname();
  const hasSubMenu = subData && subData.length > 0;
  const [open, setOpen] = useState(false);
  const isOnButton = useRef(false);

  const handleMouseEnter = () => {
    setOpen(true);
    isOnButton.current = true;
  };

  const handleMouseLeave = () => {
    isOnButton.current = false;
    setTimeout(() => {
      if (!isOnButton.current) {
        setOpen(false);
      }
    }, 200);
  };

  return (
    <Dropdown
    open={open}
    onOpenChange={(_, isOpen) => {
      setOpen(isOpen);
    }}
    >
      <MenuButton
        component={Link}
        href={navigateTo}
        className='navbar-hover'
        variant='plain'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          alignContent: 'center',
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          borderRadius: '1px',
          overflow: 'hidden',
          zIndex: 1, 
          '&:focus': {
            outline: 'none',
          },
          borderBottom: activePage === navigateTo ? '4px solid #33373D' : 'none',
        }}
      >
        <Typography
          level='subtitle-light'
          margin='auto'
          sx={{ textAlign: 'center', position: 'relative', zIndex: 2}}
        >
          {title}
        </Typography>
        {hasSubMenu && <ExpandMoreIcon sx={{ pt: 0.5, pl:0.8, fontSize: '1.7rem', position: 'center', zIndex: 2}} />}
      </MenuButton>
      {hasSubMenu && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SubMenu subData={subData} />
        </div>
      )}
    </Dropdown>
  );
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Sheet 
    className='silver-bg'
    sx={{
      height: 80,
      display: { xs: 'none', lg: 'flex' },
      transition: 'top 0.3s',
      position: 'fixed',
      top: visible ? 0 : -80,
      width: '100%',
      zIndex: 1000
    }}>
      <Stack width='100%' height='100%' boxShadow='md' direction='row' alignItems='center' px={2} sx={{display: 'flex'}}>
      <Box sx={{ flex: '0.5' }}>
        <Link href="/" passHref>
          <Image
            src="/cabana_logo.png"
            alt="cabana-logo"
            width={170}
            height={170}
            priority
            style={{ cursor: 'pointer', objectFit: 'cover', paddingLeft: '10px', }}
          />
        </Link>
      </Box>
        <Stack direction='row' width='100%' height='100%' px={5} sx={{flexGrow:'1'}}>
          {navData.map(({ text, href, subData }, idx) => (
            <HeaderItem title={text} navigateTo={href} subData={subData} key={idx}/>
          ))}
        </Stack>
      </Stack>
    </Sheet>
  );
}