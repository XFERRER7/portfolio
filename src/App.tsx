import { Header } from "./sections/Header"
import { useEffect, useRef, useState } from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { About } from "./sections/About"
import { Work } from "./sections/Work"
import { FloatingBar } from "./components/FloatingBar"
import { Contact } from "./sections/Contact"

function App() {

  const [currentSection, setCurrentSection] = useState("Header")

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })

  }, [])

  return (
    <>
      <FloatingBar currentSection={currentSection} />
      <Header onAction={setCurrentSection} />
      <About onAction={setCurrentSection} />
      <Work onAction={setCurrentSection} />
      <Contact onAction={setCurrentSection} />
    </>
  )
}

export default App
