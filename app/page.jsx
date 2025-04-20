'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Searchbar from "../components/Searchbar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Panel from '../components/Panel';
import {Box} from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Panel text="ESG Data Hub" imagePath='/earth.webp' imageAlt='Earth' />
      
      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
        <div style={{ width: '60%' }}>
          <Searchbar />
        </div>
      </div>
      <Footer />
    </Box >
  );
}