import { Header } from "./sections/Header"
import { useEffect, useRef, useState } from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { About } from "./sections/About"
import { Work } from "./sections/Work"
import { FloatingBar } from "./components/FloatingBar"
import { Contact } from "./sections/Contact"
import useLanguageStore from "./stores/languageStore"

function App() {

  const [currentSection, setCurrentSection] = useState("Header")
  const { language } = useLanguageStore()

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })

  }, [])

  return (
    <>
      <FloatingBar currentSection={currentSection} />
      <Header onAction={setCurrentSection} language={language}/>
      <About onAction={setCurrentSection} language={language}/>
      <Work onAction={setCurrentSection} language={language}/>
      <Contact onAction={setCurrentSection} language={language}/>
    </>
  )
}

export default App
