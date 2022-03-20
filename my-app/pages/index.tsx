import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pooming</title>
        <meta name="description" content="Pooming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        POOMING
      </header>
      <main className={styles.main}>
        <div>
          <button>HOME</button>
          <button>나의 우주</button>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright@
      </footer>
    </div>
  )
}

export default Home
