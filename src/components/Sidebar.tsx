import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

interface ISidebarProps {
  sidebarIsOpen: boolean
}

export const Sidebar = ({ sidebarIsOpen }: ISidebarProps) => {
  return (
    <div className={`
    ${sidebarIsOpen ? 'fixed' : 'hidden'} top-0 right-0
    w-full mt-20 md:hidden
    `}>
      <div className="
      w-full h-full border-b border-t flex flex-col 
      justify-center gap-3 py-5 px-5 text-xl bg-[#190228]
      ">

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faBriefcase} />
          <span className="h-10 px-2 text-white flex items-center">Work</span>
        </div>

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faUserCircle} />
          <span className="h-10 px-2 text-white flex items-center">About</span>
        </div>

        <div className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faPhone} />
          <span className="h-10 px-2 text-white flex items-center">Contact</span>
        </div>


      </div>

    </div>
  )
}
