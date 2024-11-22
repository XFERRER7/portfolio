
interface IAnimatedIconProps {
  img: string
}

export const AnimatedIcon = ({ img }: IAnimatedIconProps) => {
  return (
    <div className="w-36 h-36 flex items-center justify-center rounded-full animate-node" data-aos="fade-down">
      <img src={img} alt="logo-react" className='w-full h-full'/>
    </div>
  )
}
