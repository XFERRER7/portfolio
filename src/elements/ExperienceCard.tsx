import { useState } from 'react'

export const ExperienceCard = () => {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`font-poppins rgb w-full md:w-80 h-80 md:h-full 
    ${isHovered ? 'bg-white' : 'bg-gradient-to-r from-[#61dafb] to-white'}
     
    rounded-md text-white p-[2px]`}>

      <div
        className="
      w-full h-full flex flex-col gap-5 rounded-md bg-cover bg-center
      "
        style={{
          backgroundImage: "url('work01.jpg')",
        }}
      >

        <div
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
          className={`
          w-full h-full ${isHovered ? 'bg-primary' : 'bg-[#000000d2]'} 
          transition-colors  rounded-md flex flex-col gap-5 
          items-center justify-center`}

        >
          {
            isHovered ?
              <>
                <h1
                  className='font-bold text-xl text-center mx-1'>
                  Landing page desenvolvida utlizando HTML, CSS e JS
                </h1>
                <button
                  className='py-2 px-3 border bg-white text-primary font-bold rounded'>
                  Visitar website
                </button>
              </>
              :
              <>
                <h1 className={`font-bold text-2xl ${isHovered ? 'hidden' : ''}`}>Marmoraria Decore</h1>
                <span className={`font-semibold text-gray-300 ${isHovered ? 'hidden' : ''}`}>2023 - 03</span>
              </>
          }

        </div>

      </div>

    </div>
  )
}
