import { TechnologyCard } from "../elements/TechnologyCard"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { Title } from "../elements/Title"
import { IMainComponentProps } from "../types"
import { Waypoint } from "react-waypoint"
import { useLanguage } from "../hooks/useLanguage"

export const About = ({ onAction }: IMainComponentProps) => {

  const { tranlations } = useLanguage()

  return (
    <div id="about" className='
      w-full bg-[#030007]
      px-10 flex flex-col py-16 gap-14 border-b
     '>
      <Waypoint
        onEnter={() => {
          onAction("About");
        }}
      />
      <div className="w-full flex flex-col gap-10 items-center" data-aos='fade-up' data-aos-once="true">
        <Title title={tranlations.about.title} />
        <span data-aos='fade-up' data-aos-once="true" className="
          w-full
          text-md text-gray-300 md:w-3/5
          md:text-md text-center font-semibold flex justify-center gap-1
          ">
          {tranlations.about.subtitle}
        </span>
      </div>

      <div className="
      flex-col gap-10
      w-full  py-6 flex md:flex-row md:justify-center
      "
        data-aos='fade-up' data-aos-once="true"
      >
        <TechnologyCard
          icon={faCode}
          title={tranlations.about.card1.title}
          description={tranlations.about.card1.description}
        />
        <TechnologyCard
          icon={faDatabase}
          title={tranlations.about.card2.title}
          description={tranlations.about.card2.description}
        />
        <TechnologyCard
          icon={faHandshake}
          title={tranlations.about.card3.title}
          description={tranlations.about.card3.description}
        />
      </div>


    </div>
  )
}
