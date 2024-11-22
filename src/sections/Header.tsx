import { Navbar } from '../components/Navbar'
import Typewriter from 'typewriter-effect'
import { Sidebar } from '../components/Sidebar'
import { useState } from 'react'
import { IMainComponentProps } from '../types'
import { Waypoint } from "react-waypoint";
import { useLanguage } from '../hooks/useLanguage'
import { AnimatedIcon } from '../elements/AnimatedIcon'

export const Header = ({ onAction }: IMainComponentProps) => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const {tranlations} = useLanguage()

  return (
    <div id='header'
      className='w-full h-screen bg-[#030007]
     bg-cover font-roboto px-10 xl:px-16 flex flex-col
     pb-2 text-white border-b'
    >
      <Waypoint
        onEnter={() => {
          onAction("Header");
        }}
      />
      <Navbar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />

      <main className='
      flex-col py-16
      flex-1 flex md:flex-row md:py-0 items-center md:mt-0 justify-center gap-20
      '>
        <AnimatedIcon img='header-1.png'/>
        <Sidebar sidebarIsOpen={sidebarIsOpen} />
        <div className='flex flex-col gap-4 hover:scale-105 transition-all duration-700'>
          <h1 className='
          text-5xl text-center
          md:text-7xl font-poppins font-bold tracking-wide upp
          '><span>{tranlations.header.title}</span>
            <span className='text-primary text-center'
              style={{
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(to right, #ffffff, #61dafb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            > Alexandre</span>
          </h1>
          <span className='
          text-md text-left text-gray-300
          md:text-xl md:text-center font-semibold flex justify-center md:gap-1
          '>
            {tranlations.header.subtitle}
          </span>
        </div>
        <AnimatedIcon img='header2.png'/>
      </main>

    </div>
  )
}
