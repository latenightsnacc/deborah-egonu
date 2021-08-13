import 'tailwindcss/tailwind.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    <div/>
  )
  
}

export default MyApp
