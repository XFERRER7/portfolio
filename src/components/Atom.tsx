import { Line, Sphere } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"
import { Electron } from "../elements/Electron"

export const Atom = (props: any) => {

  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  return (
    <group {...props}>
      <Line worldUnits points={points} color="#6d24ff" lineWidth={0.2} />
      <Line worldUnits points={points} color="#6d24ff" lineWidth={0.2} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="#6d24ff" lineWidth={0.2} rotation={[0, 0, -1]} />
      <Electron position={[0, 0, 0.5]} speed={2} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={2} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={2} />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[1, 0.8, 1]} toneMapped={false} />
      </Sphere>
    </group>
  )
}
