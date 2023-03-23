import { Header } from "./sections/Header"
import { useEffect, useRef, useState } from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { About } from "./sections/About"
import { Work } from "./sections/Work"
import { FloatingBar } from "./components/FloatingBar"
import { Contact } from "./sections/Contact"

function App() {

  const [activeSection, setActiveSection] = useState('a');
  const sectionARef = useRef(null);
  const sectionBRef = useRef(null);
  const sectionCRef = useRef(null);
  const sectionDRef = useRef(null);

  useEffect(() => {

    Aos.init({
      duration: 2000,
    })

    function handleScroll() {
      const sectionA = sectionARef?.current;
      const sectionB = sectionBRef?.current;
      const sectionC = sectionCRef?.current;
      const sectionD = sectionDRef?.current;

      if (sectionA && isElementOnScreen(sectionA)) {
        setActiveSection('a');
        console.log('a')
      } else if (sectionB && isElementOnScreen(sectionB)) {
        setActiveSection('b');
        console.log('b')
      } else if (sectionC && isElementOnScreen(sectionC)) {
        setActiveSection('c');
        console.log('c')
      } else if (sectionD && isElementOnScreen(sectionD)) {
        setActiveSection('d');
        console.log('d')
      }
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  function isElementOnScreen(element: HTMLElement) {
    const { top, bottom } = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return top < windowHeight && bottom >= 0;
  }

  useEffect(() => {
    console.log(activeSection)
  }, [activeSection])

  return (
    <>
      <FloatingBar />
      <Header ref={sectionARef} />
      <About ref={sectionBRef} />
      <Work ref={sectionCRef} />
      <Contact ref={sectionDRef} />
    </>
  )
}

export default App
