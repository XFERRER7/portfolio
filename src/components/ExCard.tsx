import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import useLanguageStore from '../stores/languageStore'

interface IExCardProps {
  experience: {
    title: string
    technology: string
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
      contentStyle={{
        background: "#361957",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.technology}
            className='w-[100%] h-[100%] object-contain cursor-not-allowed'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.technology}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          language === 'en' ?
            experience.pointsEn.map((point, index) =>
              <li key={index} className='text-white text-[16px] font-semibold'>
                {point}
              </li>
            )
            :
            experience.pointsPt.map((point, index) =>
              <li key={index} className='text-white text-[16px] font-semibold'>
                {point}
              </li>
            )
        }
      </ul>
    </VerticalTimelineElement>
  )
}
