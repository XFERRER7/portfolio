import { FormContact } from "../components/FormContact"
import { Title } from "../elements/Title"
import { Canvas } from "@react-three/fiber"
import { Box } from "../elements/Box"
import { OrbitControls, Stars } from "@react-three/drei"
import { Suspense } from "react"

interface IContactProps {
  ref: React.MutableRefObject<null>
}

export const Contact = ({ref}: IContactProps) => {
  return (
    <div id="contact" className=' bg-gradient-to-t 
    from-[#1a0a36] via-[#120625] to-[#0f051f] px-10 flex flex-col py-16 gap-14 '>

      <Title title="Contact Me" />

      <div className="flex flex-col md:flex-row w-full md:h-[30rem] md:gap-0 gap-5">

        <div className="flex-1 rounded-sm p-2">
          <FormContact />
        </div>

        <div className="flex-1 rounded-sm p-2 flex justify-around items-center">

          <Canvas >
            <Suspense>
              <OrbitControls enableZoom={false} />
              <spotLight position={[10, 15, 10]} angle={0.3} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />

              <Box />
              <Stars />
            </Suspense>
          </Canvas>

        </div>

      </div>
    </div>
  )
}
