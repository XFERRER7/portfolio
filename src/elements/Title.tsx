import React from 'react'

interface ITitleProps {
  title: string
}

export const Title = ({ title }: ITitleProps) => {
  return (
    <>
      <h1 data-aos='fade-up' data-aos-once="true" className='font-poppins text-white text-5xl text-center md:text-6xl font-bold'>{title}</h1>
    </>
  )
}
