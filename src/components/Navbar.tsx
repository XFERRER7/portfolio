//import x from awsome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

interface INavbarProps {
  setSidebarIsOpen: (value: boolean) => void
  sidebarIsOpen: boolean
}

export const Navbar = ({ setSidebarIsOpen, sidebarIsOpen }: INavbarProps) => {
  return (
    <div className={`
    w-full h-20 ${sidebarIsOpen ? '' : 'border-b'} flex items-center justify-between
    `}>

      <div className='h-full flex items-center' data-aos="fade-down">
        <img src="logo-white.png" alt="logo-white" className='hidden md:flex w-24 h-24' />
        <span className='
        
        uppercase font-semibold text-white font-sans md:block
        '>
          Alexandre | <span className='text-primary'>Web Developer</span>
        </span>
      </div>

      <div className="
      hidden
      ">
        <span className="text-primary">EN</span>
        <span>|</span>
        <span>PT</span>
      </div>

      <div className='
      hidden
      md:flex items-center font-roboto' data-aos="fade-down
      ">
        <a href='#' className='text-white text-lg font-bold mr-10'>Work</a>
        <a href='#' className='text-white text-lg font-bold mr-10'>About</a>
        <a href='#' className='text-white text-lg font-bold mr-10'>Contact</a>
      </div>

      <div data-aos="fade-down" className="
      flex
      md:hidden flex-col gap-2
      "
        onClick={() => {
          setSidebarIsOpen(!sidebarIsOpen)
        }}
      >
        {
          sidebarIsOpen ?
            <FontAwesomeIcon icon={faX} size="2xl" /> :
            <>
              <div className="w-10 h-1 rounded-lg bg-white"></div>
              <div className="w-10 h-1 rounded-lg bg-white"></div>
              <div className="w-10 h-1 rounded-lg bg-white"></div>
            </>
        }
      </div>

    </div>
  )
}
