import { Header } from "./sections/Header"
import { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { About } from "./sections/About"

function App() {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })
    
  }, [])
  
  return (
    <>
      <Header />
      <About />
    </>
  )
}

export default App
