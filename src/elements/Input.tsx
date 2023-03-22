import { ChangeEvent } from "react"

interface IInputProps {
  placeholder: string
  value: string
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ placeholder, value, onchange, }: IInputProps) => {
  return (
    <>
      <input
        type="text"
        className='w-full rounded p-2 border border-primary bg-transparent 
        placeholder:text-gray-400 focus:outline-none focus:border-0 focus:border-b-primary
        focus:border-b focus:rounded-none focus:animate-input text-white'
        value={value != '' ? value : ''}
        onChange={onchange}
        placeholder={placeholder}
      />
    </>
  )
}
