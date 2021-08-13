import 'tailwindcss/tailwind.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Wrapper from './components/Wrapper/Wrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Wrapper>
      
    </>
  )
  
}

export default MyApp
