import { Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export const Electron = ({ radius = 2.75, speed = 6, ...props }) => {

  const ref = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed

    if (!ref.current) return
    ref.current.position.set(
      Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0
    )

  })

  return (
    <group {...props} >
      <Trail local width={5} length={6} attenuation={(t) => t * t} color='#33333300'>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]}/>
          <meshBasicMaterial toneMapped={false} color='#ffffff'/>
        </mesh>
      </Trail>
    </group>
  )
}
