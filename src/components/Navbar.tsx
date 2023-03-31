import useLanguageStore from '../stores/languageStore'
import { useLanguage } from '../hooks/useLanguage'

interface INavbarProps {
  setSidebarIsOpen: (value: boolean) => void
  sidebarIsOpen: boolean
}

export const Navbar = ({ setSidebarIsOpen, sidebarIsOpen }: INavbarProps) => {

  const { language, setLanguage } = useLanguageStore()
  const { tranlations } = useLanguage()

  return (
    <div className={`
    w-full h-20 ${sidebarIsOpen ? '' : 'border-b'} flex items-center justify-between
    `}>

      <div className='h-full flex items-center'>
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
      w-64
      md:flex items-center font-roboto'>
        <a href='#about' className='text-white text-lg font-bold mr-10'>{tranlations.header.item1Navbar}</a>
        <a href='#work' className='text-white text-lg font-bold mr-10'>{tranlations.header.item2Navbar}</a>
        <a href='#contact' className='text-white text-lg font-bold mr-10'>{tranlations.header.item3Navbar}</a>
      </div>

      <div className="
      flex
      md:hidden flex-col gap-2
      "
        onClick={() => {
          setSidebarIsOpen(!sidebarIsOpen)
        }}
      >
        <div className={`flex flex-col gap-2 ${sidebarIsOpen ? 'mb-5 mr-2' : ''}`}>
          
          <div className={`w-8 h-1 rounded-lg transition-all bg-white 
          ${sidebarIsOpen ? 'rotate-45  translate-x-menu-lx translate-y-menu-ly' : ''}`}></div>

          <div className={`w-8 h-1 rounded-lg bg-white 
          ${sidebarIsOpen ? 'hidden' : ''}`}></div>

          <div className={`w-8 h-1 rounded-lg transition-all bg-white 
          ${sidebarIsOpen ? '-rotate-45 translate-x-menu-rx translate-y-menu-ry' : ''}`}></div>
          
        </div>
      </div>

    </div>
  )
}
