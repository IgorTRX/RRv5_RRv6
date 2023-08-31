import React from 'react'
import { useNavigate } from 'react-router-dom'
// Icons
import { ChevronLeftIcon } from '@heroicons/react/solid'

const BackButton = ({ children, label }) => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/posts')
  }
  return (
    <button
      onClick={handleSubmit}
      className='group flex font-semibold text-sm leading-6 text-slate-600 hover:text-slate-400 trans transition-all duration-200'>
      <ChevronLeftIcon className='h-6' />
      {children || label}
    </button>
  )
}

export default BackButton
