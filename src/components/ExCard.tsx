import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import useLanguageStore from '../stores/languageStore'
import { ArrowRight, SquareArrowRight } from 'lucide-react'

interface IExCardProps {
  experience: {
    title: string
    technology: string
    link: string
    pointsEn: string[]
    pointsPt: string[]
    icon: string
    date: string
    iconBg: string
  }
}

export const ExCard = ({ experience }: IExCardProps) => {

  const { language } = useLanguageStore()

  return (
    <VerticalTimelineElement
      className='hover:scale-[1.01] transition-all font-bold'
      contentStyle={{
        background: "#f4f4f5",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full overflow-hidden'>
          <img
            src={experience.icon}
            alt={experience.technology}
            className='w-[100%] h-[100%] object-contain cursor-not-allowed rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px]'>{experience.title}</h3>
        {
          experience.link !== '' &&
          <a
            href={experience.link}
            target='_blank'
            rel='noreferrer'
            className='text-[16px] text-blue-500 font-semibold flex items-center gap-2 hover:scale-105 transition-all'
          >
            {experience.link}
            <SquareArrowRight size={24} className='text-black'/>
          </a>
        }
        <p
          className='text-secondary text-[16px] font-semibold black'
          style={{ margin: 0 }}
        >
          {experience.technology}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          language === 'en' ?
            experience.pointsEn.map((point, index) =>
              <li key={index} className='text-zinc-800 text-[16px]'>
                {point}
              </li>
            )
            :
            experience.pointsPt.map((point, index) =>
              <li key={index} className='text-zinc-800 text-[16px]'>
                {point}
              </li>
            )
        }
      </ul>
    </VerticalTimelineElement>
  )
}
