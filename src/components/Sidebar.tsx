import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import useLanguageStore from '../stores/languageStore'
import { useLanguage } from '../hooks/useLanguage'

interface ISidebarProps {
  sidebarIsOpen: boolean
}

export const Sidebar = ({ sidebarIsOpen }: ISidebarProps) => {

  const { language, setLanguage } = useLanguageStore()

  const { tranlations } = useLanguage()

  return (
    <div className={`
    ${sidebarIsOpen ? 'absolute' : 'hidden'} top-0
    w-[calc(100%-5rem)] mt-20 md:hidden left-1/2 transform -translate-x-1/2
    `}
    >
      <div className="
      w-full h-full border-b border-t flex flex-col
      justify-center gap-3 py-5 px-5 text-xl bg-[#0f051f]
      "
      >

        <a href="https://www.linkedin.com/in/alexandre-talles-b662a020b/" target='_blank' className='flex gap-2 items-center'>
          <img src="linkedin.svg" alt="linkedin logo" className='w-7 h-7' />
          <span className="h-10 px-2 text-white flex items-center">{tranlations.header.item1Navbar}</span>
        </a>

        <a href="https://github.com/XFERRER7" target='_blank' className='flex gap-2 items-center'>
          <img src="github.svg" alt="github logo" className='w-7 h-7' />
          <span className="h-10 px-2 text-white flex items-center">{tranlations.header.item2Navbar}</span>
        </a>

        <a href="https://www.instagram.com/xande_ferreira7/" target='_blank' className='flex gap-2 items-center'>
          <img src="instagram.svg" alt="instagram logo" className='w-7 h-7' />
          <span className="h-10 px-2 text-white flex items-center">{tranlations.header.item3Navbar}</span>
        </a>

        <div className='flex gap-4 items-center'>
          <FontAwesomeIcon icon={faGlobe} className='w-7 h-7'/>
          <div className='flex gap-2 items-center'>
            <button
              className={`${language == 'en' ? 'text-black font-bold bg-white' : ''}  
              font-roboto cursor-pointer transition-colors duration-300 ease-in-out px-6 
              rounded border`}
              onClick={() => {
                setLanguage('en')
              }}
            >
              EN
            </button>

            <span
              className={`${language == 'pt' ? 'text-black font-bold bg-white' : ''} font-roboto 
              cursor-pointer transition-colors duration-300 ease-in-out px-6 
              rounded border`}
              onClick={() => {
                setLanguage('pt')
              }}
            >
              PT
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}
