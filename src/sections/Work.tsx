import { Waypoint } from "react-waypoint"
import { ExperienceCard } from "../elements/ExperienceCard"
import { Title } from "../elements/Title"
import { IMainComponentProps } from "../types"
import img1 from '/work1.png'


export const Work = ({ onAction }: IMainComponentProps) => {
  return (
    <div id="work" className="w-full bg-gradient-to-b from-[#1a0a36] via-[#120625] to-[#0f051f]
    px-10 flex flex-col py-16 gap-14 border-b">
      <Waypoint
        onEnter={() => {
          onAction("Work");
        }}
      />
      <div className="w-full flex flex-col gap-10 items-center" data-aos='fade-up' data-aos-once="true">
        <Title title="Trabalhos e projetos" />
        <span data-aos='fade-up' className="
          w-full
          text-md text-gray-300 md:w-3/5
          md:text-md text-center font-semibold flex justify-center gap-1
          ">
          Minha experiência com desenvolvimento de software.
        </span>
      </div>

      <div className="w-full flex flex-col items-center" data-aos='fade-up' data-aos-once="true">

        <div className="
        flex-col gap-14
        w-full md:h-80 py-6 flex md:flex-row md:justify-center
        ">
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="React JS - Typescript" />
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS" />
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS" />
        </div>

        <div className="
      flex-col gap-14
      w-full md:h-80 py-6 flex md:flex-row md:justify-center
      ">
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS" />
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS" />
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS" />

        </div>

      </div>

    </div>
  )
}
