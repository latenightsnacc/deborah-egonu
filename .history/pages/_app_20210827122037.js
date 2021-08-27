import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/'
import Wrapper from './components/Wrapper/Wrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>  
    </>
  )
  
}

export default MyApp
