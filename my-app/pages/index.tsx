import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pooming</title>
        <meta name="description" content="Pooming" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        POOMING
      </header>
      <main className={styles.main}>
       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="홈"/>
          <Tab label="나의 우주"/>
        </Tabs>
       </Box>
      </main>

      <footer className={styles.footer}>
        Copyright@
      </footer>
    </div>
  )
}

export default Home
