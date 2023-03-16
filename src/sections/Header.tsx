import { Navbar } from '../components/Navbar'
import { ReactLogo } from '../elements/ReactLogo'
import { NodeLogo } from '../elements/NodeLogo'
import Typewriter from 'typewriter-effect'
import { Sidebar } from '../components/Sidebar'
import { useState } from 'react'

export const Header = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <div 
     className='w-full h-screen bg-header bg-cover font-roboto px-10 flex flex-col 
     pb-2 text-white'
     >

      <Navbar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>

      <main className='
      flex-col gap-14 mt-20
      flex-1 flex md:flex-row items-center md:mt-0 md:justify-center md:gap-20
      '>
      <ReactLogo />
        <Sidebar sidebarIsOpen={sidebarIsOpen}/>
        <div className='flex flex-col gap-4'>
          <h1 className='
          text-5xl text-center
          md:text-7xl md:text-left font-open tracking-wide upp
          '>Hi, I'm
            <span className='text-primary'
              style={{
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(to right, #ffffff, #61dafb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            > Alexandre</span>
          </h1>
          <span className='
          text-md text-left
          md:text-xl md:text-center font-semibold flex justify-center gap-1
          '>
            Fullstack Developer,
            <Typewriter
              options={{
                delay: 100,
                cursor: '',
                wrapperClassName: 'ml-2 text-[#61dafb] font-semibold tracking-wider',
              }}
              onInit={(typewriter) => {
                typewriter.typeString('React')
                .start()
              }}
            />
            <span>|</span>
            <Typewriter
              options={{
                delay: 100,
                cursor: '',
                wrapperClassName: 'text-[#68A063] font-semibold tracking-wider',
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Node')
                .start()
              }}
            />
          </span>
        </div>
        <NodeLogo />
      </main>

    </div>
  )
}
