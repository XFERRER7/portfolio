import React, { FormEvent, useState } from 'react'
import { Input } from '../elements/Input'

export const FormContact = () => {

  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  return (
    <form className='w-full h-full rounded-sm flex flex-col 
    gap-5 items-center md:p-10 relative'>

      <h1 className='text-2xl text-gray-300 text-center font-semibold'>Send me an email</h1>

      <div className='w-full h-12 flex justify-between gap-2'>
        <Input value={name} placeholder='Name' onchange={(e) => setName(e.target.value)}/>
        <Input value={email} placeholder='Email' onchange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='w-full h-12 flex justify-center'>
        <Input value={subject} placeholder='Subject' onchange={(e) => setSubject(e.target.value)}/>
      </div>
      <div className='w-full flex justify-center'>
        <textarea
          className='w-full h-32 p-2 rounded-sm bg-transparent border border-primary
          focus:outline-none focus:animate-input text-white scrollbar-thin overflow-x-hidden overflow-y-scroll scrollbar-thumb-primary'
          value={message != ''  ? message : ''}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          placeholder='Message' cols={30} rows={10}></textarea>
      </div>

      <div className='w-full h-10 flex justify-center'>
        <button className='w-full md:w-56 h-12 rounded bg-primary text-white font-semibold 
        font-poppins'>Send</button>
      </div>
    </form>
  )
}
