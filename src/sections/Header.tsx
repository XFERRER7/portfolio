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
     className='w-full h-screen bg-[#000000] 
     bg-cover font-roboto px-10 flex flex-col border-b
     pb-2 text-white'
     >

      <Navbar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen}/>

      <main className='
      flex-col py-16
      flex-1 flex md:flex-row md:py-0 items-center md:mt-0 justify-center gap-20
      '>
      <ReactLogo />       
        <Sidebar sidebarIsOpen={sidebarIsOpen}/>
        <div className='flex flex-col gap-4'>
          <h1 className='
          text-5xl text-center
          md:text-7xl font-poppins font-bold tracking-wide upp
          '><span>Hi, I'm </span>
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
