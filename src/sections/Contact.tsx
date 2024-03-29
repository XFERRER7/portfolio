import { FormContact } from "../components/FormContact"
import { Title } from "../elements/Title"
import { Canvas } from "@react-three/fiber"
import { Box } from "../elements/Box"
import { Float, OrbitControls, Stars } from "@react-three/drei"
import { Suspense } from "react"
import { Atom } from "../components/Atom"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { IMainComponentProps } from "../types"
import { Waypoint } from "react-waypoint"
import { useLanguage } from "../hooks/useLanguage"

export const Contact = ({ onAction }: IMainComponentProps) => {

  const { tranlations } = useLanguage()

  return (
    <div id="contact" className='bg-[#030007] px-10 flex flex-col py-16 gap-14'>
      <Waypoint
        onEnter={() => {
          onAction("Contact");
        }}
      />
      <Title title={tranlations.contact.title} />

      <div className="flex flex-col md:flex-row w-full md:h-[30rem] md:gap-0 gap-5" data-aos='fade-up' data-aos-once="true">

        <div className="flex-1 rounded-sm p-2 flex justify-center ">
          <FormContact />
        </div>

        <div className="flex-1 rounded-sm p-2 flex justify-around items-center">

          <Canvas camera={{ position: [0, 0, 10] }}>
            <OrbitControls enableZoom={false} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <Suspense fallback={
                <p className="font-bold text-white">
                  Loading...
                </p>
              }>
                <Atom />
              </Suspense>
            </Float>
            <EffectComposer>
              <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
            </EffectComposer>
          </Canvas>

        </div>

      </div>
    </div>
  )
}
