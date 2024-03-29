import { useState } from 'react'
import { Input } from '../elements/Input'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import load from '/load.png'
import { useLanguage } from '../hooks/useLanguage';

interface IFormData {
  nome: string
  email: string
  subject: string
  mensagem: string
}

export const FormContact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { tranlations } = useLanguage()

  const handleSubmit = async (formData: IFormData) => {

    setLoading(true)

    if (name == '' || email == '' || subject == '' || message == '') {
      toast.error('Preencha todos os campos', {
        closeOnClick: true,
        pauseOnHover: true,
      })
      setLoading(false)
      return
    }

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.mensagem
    }

    emailjs.send("service_5z29fqn", "template_vjvnxpk", templateParams, "lL3u-Qdrfe1F3ORgg")
      .then(() => {
        toast.success('Email enviado com sucesso!', {
          closeOnClick: true,
          pauseOnHover: true,
        })
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setLoading(false)
      }, (error) => {
        toast.error('Erro ao enviar email', {
          closeOnClick: true,
          pauseOnHover: true,
        })
        setLoading(false)
      })
  }

  return (
    <form className='w-full md:max-w-[40rem] h-full rounded-sm flex flex-col 
    gap-5 items-center md:p-10 relative'>

      <h1 className='text-2xl text-gray-300 text-center font-semibold'>{tranlations.contact.subtitle}</h1>

      <div className='w-full h-12 flex justify-between gap-2'>
        <Input value={name} placeholder={tranlations.contact.form.name} onchange={(e) => setName(e.target.value)} />
        <Input value={email} placeholder={tranlations.contact.form.email} onchange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='w-full h-12 flex justify-center'>
        <Input value={subject} placeholder={tranlations.contact.form.subject} onchange={(e) => setSubject(e.target.value)} />
      </div>
      <div className='w-full flex justify-center'>
        <textarea
          className='w-full h-32 p-2 rounded-sm bg-transparent border border-white
          focus:outline-none focus:animate-input text-white scrollbar-thin overflow-x-hidden overflow-y-scroll scrollbar-thumb-primary'
          value={message != '' ? message : ''}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          placeholder={tranlations.contact.form.message} cols={30} rows={10}></textarea>
      </div>

      <div className='w-full h-10 flex justify-center'>
        <button onClick={(e) => {
          e.preventDefault()
          handleSubmit({
            nome: name,
            email: email,
            subject: subject,
            mensagem: message
          })
        }} className='w-full md:w-56 h-12 rounded bg-zinc-100 text-black font-semibold 
        font-poppins flex items-center gap-3 justify-center hover:brightness-75 transition-all'
        disabled={loading ? true : false}
        >
          
          {
            loading ? <img src={load} alt="load" className='h-10 -10 animate-spin '/> : tranlations.contact.form.button
          }
          
        </button>
      </div>
      <ToastContainer />
    </form>
  )
}
