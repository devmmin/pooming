import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Drawer, Box, Tab, Tabs, List, ListItem, Divider, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { useState } from 'react';
import { Menu, Search } from '@material-ui/icons';

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [openDrawer, setState] = useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type !== 'click') {
      return;
    }
    setState(open);
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
        <Menu onClick={toggleDrawer(true)} style={{ fontSize: 30 }}/>
        <Drawer
          anchor={'left'}
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            <List disablePadding>
              <ListItem>
                푸밍이 뭐예요?
              </ListItem>
              <Divider/>
              <ListItem>
                할 말 있어요
              </ListItem>
              <Divider/>
              <ListItem>
                심테공방
              </ListItem>
              <Divider/>
              <ListItem>
                기업 유저이신가요?
              </ListItem>
              <Divider/>
            </List>
          </Box>
        </Drawer>
        POOMING
        <Search style={{ fontSize: 30 }}/>
      </header>
      <main className={styles.main}>
       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="홈" sx={{ fontSize: '20px' }}/>
          <Tab label="나의 우주" sx={{ fontSize: '20px' }}/>
        </Tabs>
      </Box>
      <Box sx={{ backgroundColor: '#1a164b'}}>
        <h1 style={{ padding: '20px 15px 0', margin: 0 }}>금주의 HOT한 테스트</h1>
        <Box sx={{ display: 'flex', paddingBottom: '30px' }}>
          {['모의고사 궁합', '나의 민낯', 'mbti'].map((name, index) => {
            return (
              <Card sx={{ width: 162, height: 225, margin: '8px 0 0 16px' }}>
                <CardHeader title={index + 1}></CardHeader>
                <CardContent>
                  <Typography sx={{ fontWeight: 'bold' }}>{name} 테스트</Typography>
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Box>
      </main>

      <footer className={styles.footer}>
        Copyright@
      </footer>
    </div>
  )
}

export default Home
