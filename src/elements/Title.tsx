import React from 'react'

interface ITitleProps {
  title: string
}

export const Title = ({ title }: ITitleProps) => {
  return (
    <>
      <h1 className='font-poppins text-white text-5xl text-center md:text-6xl font-bold'>{title}</h1>
    </>
  )
}
