import { TechnologyCard } from "../elements/TechnologyCard"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { Title } from "../elements/Title"
import { IMainComponentProps } from "../types"
import { Waypoint } from "react-waypoint"

export const About = ({ onAction }: IMainComponentProps) => {
  return (
    <div id="about" className='
      w-full bg-gradient-to-t from-[#1a0a36] via-[#120625] to-[#0f051f]
      px-10 flex flex-col py-16 gap-14 border-b
     '>
       <Waypoint
        onEnter={() => {
          onAction("About");
        }}
      />
      <div className="w-full flex flex-col gap-10 items-center" data-aos='fade-up' data-aos-once="true">
        <Title title="Visão geral" />
        <span className="
          w-full
          text-md text-gray-300 md:w-3/5
          md:text-md text-center font-semibold flex justify-center gap-1
          ">
          Meu nome é Alexandre Talles e sou um desenvolvedor full-stack com foco em front-end
          utilizando React JS e back-end utilizando Node JS.
          Sou particularmente hábil com React JS, tendo desenvolvido diversas aplicações
          utilizando essa tecnologia. Tenho dois anos de
          experiência com desenvolvimento de software.
          Eu me considero um desenvolvedor altamente motivado e apaixonado por software.
          Sempre estou buscando por novas oportunidades para aprender e crescer, e isso se
          reflete em minha habilidade de aprender rapidamente novas tecnologias e conceitos.
        </span>
      </div>

      <div className="
      flex-col gap-10
      w-full md:h-96 py-6 flex md:flex-row md:justify-around
      "
      data-aos='fade-up' data-aos-once="true"
      >
        <TechnologyCard
          icon={faCode}
          title="Front-end Developer"
          description="Meu conhecimento em ReactJS, permite criar interfaces incríveis e entregar
        soluções personalizadas para as necessidades do meu cliente. Meu foco é sempre
        fornecer códigos limpos, bem estruturados e fáceis de entender."
        />
        <TechnologyCard
          icon={faDatabase}
          title="Back-end Developer"
          description="Com minha base sólida em Java e Spring Boot, rapidamente me adaptei 
          ao Node.js, trabalhando em projetos pessoais e aplicando as habilidades adquiridas para alcançar resultados 
          eficazes e eficientes."
        />
        <TechnologyCard
          icon={faHandshake}
          title="Cooperativo"
          description="Possuo uma forte ética de trabalho em equipe e uma atitude colaborativa, 
          sou altamente cooperativo e gosto de trabalhar com outros profissionais para 
          alcançar resultados excelentes."
        />
      </div>


    </div>
  )
}
