

export const Box = () => {

  
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach={'geometry'} args={[3, 3, 3]} />
      <meshStandardMaterial color={'#6d24ff'}/>

    </mesh>
  )
}