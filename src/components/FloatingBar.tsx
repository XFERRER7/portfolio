import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const FloatingBar = () => {

  const [active, setActive] = useState<'home' | 'about' | 'work' | 'contact'>('home');

  return (
    <nav className='fixed bottom-5 md:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-[calc(100%-15px)] bg-black/20 h-16 backdrop-blur-2xl rounded-full 
        max-w-[450px] mx-auto flex justify-around items-center text-2xl text-white'>

        <Link to='home' onClick={() => setActive('home')} className={`${active == 'home' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`} smooth={true} spy={true}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to='about' onClick={() => setActive('about')} className={`${active == 'about' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`} smooth={true} spy={true}>
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        <Link to='work' onClick={() => setActive('work')} className={`${active == 'work' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`}smooth={true} spy={true}>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
        <Link to='contact' onClick={() => setActive('contact')} className={`${active == 'contact' ? 'bg-gradient' : ''} cursor-pointer w-14 h-14 flex items-center justify-center rounded-full`} smooth={true} spy={true}>
          <FontAwesomeIcon icon={faPhone} />
        </Link>

        </div>
      </div>
    </nav>
  )
}
