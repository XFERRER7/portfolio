import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import useLanguageStore from '../stores/languageStore'
import { useTextController } from '../hooks/useTextController'

interface ISidebarProps {
  sidebarIsOpen: boolean
}

export const Sidebar = ({ sidebarIsOpen }: ISidebarProps) => {

  const { language, setLanguage } = useLanguageStore()

  const { controllerTextHeader } = useTextController()

  return (
    <div className={`
    ${sidebarIsOpen ? 'absolute' : 'hidden'} top-0
    w-[calc(100%-5rem)] mt-20 md:hidden left-1/2 transform -translate-x-1/2
    `}
    >
      <div className="
      w-full h-full border-b border-t flex flex-col
      justify-center gap-3 py-5 px-5 text-xl bg-[#000000]
      "
      >

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faUserCircle} />
          <a href='#about' className="h-10 px-2 text-white flex items-center">{controllerTextHeader('item1')}</a>
        </div>

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faBriefcase} />
          <a href='#work' className="h-10 px-2 text-white flex items-center">{controllerTextHeader('item2')}</a>
        </div>

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faPhone} />
          <a href='#contact' className="h-10 px-2 text-white flex items-center">{controllerTextHeader('item3')}</a>
        </div>
        <div className='flex gap-4 items-center'>
            <FontAwesomeIcon icon={faGlobe} />
          <div className='flex gap-2 items-center'>
            <button
              className={`${language == 'EN' ? 'text-black font-bold bg-white' : ''}  
              font-roboto cursor-pointer transition-colors duration-300 ease-in-out px-6 
              rounded-sm border`}
              onClick={() => {
                setLanguage('en')
              }}
            >
              EN
            </button>

            <span
              className={`${language == 'PT' ? 'text-black font-bold bg-white' : ''} font-roboto 
              cursor-pointer transition-colors duration-300 ease-in-out px-6 
              rounded-sm border`}
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
