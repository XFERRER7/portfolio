import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const FloatingBar = () => {
  return (
    <nav className='fixed bottom-5 md:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-[calc(100%-15px)] bg-black/20 h-16 backdrop-blur-2xl rounded-full 
        max-w-[450px] mx-auto flex justify-around items-center text-2xl text-white'>

        <Link to='home' className='cursor-pointer w-14 h-14 flex items-center justify-center rounded-full' activeClass='active' smooth={true} spy={true}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to='about' className='cursor-pointer w-14 h-14 flex items-center justify-center rounded-full' activeClass='active' smooth={true} spy={true}>
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
        <Link to='work' className='cursor-pointer w-14 h-14 flex items-center justify-center rounded-full' activeClass='active' smooth={true} spy={true}>
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
        <Link to='contact' className='cursor-pointer w-14 h-14 flex items-center justify-center rounded-full' activeClass='active' smooth={true} spy={true}>
          <FontAwesomeIcon icon={faPhone} />
        </Link>

        </div>
      </div>
    </nav>
  )
}
