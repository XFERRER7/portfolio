import { Header } from "./sections/Header"
import { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { About } from "./sections/About"
import { Work } from "./sections/Work"
import { FloatingBar } from "./components/FloatingBar"
import { Contact } from "./sections/Contact"

function App() {

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })

  }, [])

  return (
    <>
      <FloatingBar />
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default App
