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
    w-full h-full text-center 
    md:w-[21rem] md:h-[20.8rem] text-white rounded-lg
    "
    >
      <div className="w-full h-full flex flex-col gap-5 rounded-lg p-8 bg-[#361957] hover:brightness-150 transition-all duration-300">
        <FontAwesomeIcon icon={icon} size="3x" />

        <h1 className="font-poppins font-bold text-2xl">{title}</h1>

        <span className="font-roboto text-gray-300 font-semibold text-sm leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  )
}
