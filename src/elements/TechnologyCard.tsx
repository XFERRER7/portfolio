import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface ICardTechnologyProps {
  icon: any;
  title: string;
  description: string;
}

export const TechnologyCard = ({ title, description, icon }: ICardTechnologyProps) => {
  return (
    <div
      className="
    w-full h-full text-center bg-gradient-to-r from-[#ffffff] to-[#61dafb]
    md:w-[21rem] md:h-80 md:text-left text-white rounded-lg p-[3px]
    "
      data-aos="fade-right" data-aos-once="true"
    >
      <div className="w-full h-full flex flex-col gap-5 rounded-lg p-8 bg-[#361957]">
        <FontAwesomeIcon icon={icon} size="3x" />

        <h1 className="font-poppins font-bold text-2xl">{title}</h1>

        <span className="font-roboto text-gray-300 font-semibold text-sm leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  )
}
