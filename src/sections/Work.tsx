import { ExperienceCard } from "../elements/ExperienceCard"
import { Title } from "../elements/Title"
import img1 from '/work01.jpg'

interface IWorkProps {
  ref: React.MutableRefObject<null>
}

export const Work = ({ref}: IWorkProps) => {
  return (
    <div id="work" className="w-full bg-gradient-to-b from-[#1a0a36] via-[#120625] to-[#0f051f]
    px-10 flex flex-col py-16 gap-14 border-b">

      <div className="w-full flex flex-col gap-10 items-center">
        <Title title="Trabalhos e projetos" />
        <span className="
          w-full
          text-md text-gray-300 md:w-3/5
          md:text-md text-center font-semibold flex justify-center gap-1
          ">
          Minha experiência com desenvolvimento de software.
        </span>
      </div>

      <div className="w-full flex flex-col items-center">

        <div className="
        flex-col gap-14
        w-full md:h-80 py-6 flex md:flex-row md:justify-center
        ">
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
        </div>

        <div className="
      flex-col gap-14
      w-full md:h-80 py-6 flex md:flex-row md:justify-center
      ">
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
          <ExperienceCard img={img1} link="https://www.marmorariadecore.website" title="Landing page desenvolvida com React JS"/>
          
        </div>

      </div>

    </div>
  )
}
