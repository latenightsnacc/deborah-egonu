import 'tailwindcss/tailwind.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

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
