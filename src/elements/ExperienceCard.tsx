import { TextGradient } from './TextGradient'

interface IExperienceCardProps {
  img: string
  title: string
  link: string
}

export const ExperienceCard = ({ img, link, title, }: IExperienceCardProps) => {
  return (
    <div className='font-poppins w-full md:w-80 h-80 md:h-full group 
    relative overflow-hidden rounded border border-white'>

      <div className='w-full h-full group-hover:bg-black/70 absolute z-40 
      transition-all duration-300'></div>

      <img src={img} alt="img1" className='w-full h-full group-hover:scale-125 transition-all 
      duration-500 object-cover object-center '/>

      <div className='absolute bottom-full w-full group-hover:left-1/2 group-hover:top-20
      group-hover:-translate-x-1/2
      transition-all 
      duration-700 z-50'>
        <TextGradient
          text={title}
          className='text-center text-white font-bold mx-auto w-full'
        />
      </div>
      <div className='absolute bottom-full group-hover:left-1/2 group-hover:top-1/2 
      group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] 
      transition-all duration-700 z-50'>
        <button

          className='py-2 px-3 bg-primary text-white font-bold rounded'>
          <a href={link} target='_blank'>Visitar website</a>
        </button>
      </div>


    </div>
  )
}
