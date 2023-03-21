import React from 'react'

interface ITextGradientProps {
  text: string
  className?: string
  colorText1?: string
  colorText2?: string
}

export const TextGradient = ({ text, className, colorText1 = '#ffffff', colorText2 = '#61dafb' }: ITextGradientProps) => {
  return (
    <>
      <h1 className={className}
        style={{
          backgroundClip: 'text',
          backgroundImage: `linear-gradient(to right, ${colorText1}, ${colorText2})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {text}
      </h1>
    </>
  )
}
