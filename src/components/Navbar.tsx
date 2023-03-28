//import x from awsome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import useLanguageStore from '../stores/languageStore'
import { useTextController } from '../hooks/useTextController'

interface INavbarProps {
  setSidebarIsOpen: (value: boolean) => void
  sidebarIsOpen: boolean
}

export const Navbar = ({ setSidebarIsOpen, sidebarIsOpen }: INavbarProps) => {

  const { language, setLanguage } = useLanguageStore()

  const { controllerTextHeader } = useTextController()

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
      hidden md:flex gap-3
      ">
        <span
          className={`${language == 'en' ? 'text-primary hover:text-primary' : 'text-white'}  font-roboto 
        font-semibold cursor-pointer transition-colors duration-300 ease-in-out
        hover:text-gray-300 hover:transition-colors hover:duration-300 hover:ease-in-out 
        `}
          onClick={() => {
            setLanguage('en')
          }}
        >
          EN
        </span>

        <span>|</span>

        <span
          className={`${language == 'pt' ? 'text-primary hover:text-primary' : 'text-white'} font-roboto 
        font-semibold cursor-pointer transition-colors duration-300 ease-in-out
        hover:text-gray-300 hover:transition-all 
        `}
          onClick={() => {
            setLanguage('pt')
          }}
        >
          PT
        </span>
      </div>

      <div className='
      hidden
      md:flex items-center font-roboto' data-aos="fade-down
      ">
        <a href='#about' className='text-white text-lg font-bold mr-10'>{controllerTextHeader('item1')}</a>
        <a href='#work' className='text-white text-lg font-bold mr-10'>{controllerTextHeader('item2')}</a>
        <a href='#contact' className='text-white text-lg font-bold mr-10'>{controllerTextHeader('item3')}</a>
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
