import { FormContact } from "../components/FormContact"
import { Title } from "../elements/Title"

export const Contact = () => {
  return (
    <div id="contact" className=' bg-gradient-to-t 
    from-[#1a0a36] via-[#120625] to-[#0f051f] px-10 flex flex-col py-16 gap-14 '>

      <Title title="Contact Me" />
      
      <div className="flex flex-col md:flex-row w-full h-[30rem]">

        <div className="flex-1 rounded-sm p-2">
          <FormContact />
        </div>
        <div className="flex-1 rounded-sm p-2">

        </div>
        

      </div>
    </div>
  )
}
