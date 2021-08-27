import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/'
import Wrapper from './components/Wrapper/Wrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      
        <Navbar />
        <Component {...pageProps} />
        <Footer />
     
      
    </>
  )
  
}

export default MyApp
