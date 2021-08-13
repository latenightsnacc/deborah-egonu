import Head from 'next/head'
import Navbar from './components/NavBar/Navbar'
import GridNav from './components/Grid/GridNav'
import Footer from './components/Footer/Footer'
// import Image from 'next/image'
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
        <Navbar />
        <GridNav />
      </main>
      <Footer />
    </div>
  )
}
