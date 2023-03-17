import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface ICardTechnologyProps {
  icon: any;
  title: string;
  description: string;
}

export const CardTechnology = ({ title, description, icon }: ICardTechnologyProps) => {
  return (
    <div  
    className="
    w-full h-full text-center
    md:w-[21rem] md:h-80 bg-primary md:text-left text-white rounded-sm flex flex-col gap-5 p-8
    "
    data-aos="fade-right" data-aos-once="true"
    >

      <FontAwesomeIcon icon={icon} size="3x" />

      <h1 className="font-poppins font-bold text-2xl">{title}</h1>

      <span className="font-roboto text-gray-300 font-semibold text-sm leading-relaxed">
        {description}
      </span>

    </div>
  )
}
