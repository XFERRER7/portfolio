import { Waypoint } from "react-waypoint"
import { ExperienceCard } from "../elements/ExperienceCard"
import { Title } from "../elements/Title"
import { IMainComponentProps } from "../types"
import img1 from '/work2.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { useState } from "react"
import { ExCard } from "../components/ExCard"
import { experiences } from "../utils/experiences"
import { useLanguage } from "../hooks/useLanguage"

export const Work = ({ onAction }: IMainComponentProps) => {

  const { tranlations } = useLanguage()

  return (
    <div id="work" className="w-full bg-[#030007]
    px-10 flex flex-col py-16 gap-14 border-b">
      <Waypoint
        onEnter={() => {
          onAction("Work");
        }}
      />
      <div className="w-full flex flex-col gap-10 items-center" data-aos='fade-up' data-aos-once="true">
        <Title title={tranlations.work.title} />
        <span data-aos='fade-up' data-aos-once="true" className="
          w-full
          text-md text-gray-300 md:w-3/5
          md:text-md text-center font-semibold flex justify-center gap-1
          ">
          {tranlations.work.subtitle}
        </span>
      </div>

      <div className="w-full flex flex-col items-center" data-aos='fade-up' data-aos-once="true">

        <VerticalTimeline>
          {
            experiences.map((experience, index) =>
              <ExCard key={index} experience={experience} />
            )
          }
        </VerticalTimeline>

      </div>

    </div>
  )
}
