import Banner from './components/Banner/index'
import Head from 'next/head'
import Portfolio from './portfolio'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to my website - Deborah Egonu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5">
        <Banner />
        <Portfolio />
      </main>
    </div>
  )
}
