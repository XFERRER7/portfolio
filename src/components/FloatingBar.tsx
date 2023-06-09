import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

interface IFloatingBarProps {
  currentSection: string
}

export const FloatingBar = ({ currentSection }: IFloatingBarProps) => {

  const [active, setActive] = useState<'Header' | 'About' | 'Work' | 'Contact'>('Header');

  useEffect(() => {
    setActive(currentSection as 'Header' | 'About' | 'Work' | 'Contact')
  }, [currentSection])

  return (
    <nav className='fixed bottom-5 md:bottom-3 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-[calc(100%-15px)] bg-black/20 h-16 backdrop-blur-2xl rounded-full 
        max-w-[450px] mx-auto flex justify-around items-center text-2xl text-white'>

          <Link
            to='header'
            className={`
            ${active == 'Header' ? 'bg-gradient' : ''}
              cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`}
            smooth={true}
            spy={true}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link
            to='about'
            className={`${active == 'About' ? 'bg-gradient' : ''}  selection:select-none cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`}
            smooth={true}
            spy={true}>
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
          <Link
            to='work'
            className={`${active == 'Work' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`}
            smooth={true}
            spy={true}>
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
          <Link
            to='contact'
            className={`${active == 'Contact' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`}
            smooth={true}
            spy={true}>
            <FontAwesomeIcon icon={faPhone} />
          </Link>

        </div>
      </div>
    </nav>
  )
}
