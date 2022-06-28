import React, { FC } from 'react'

interface ExpenseDateProps {
  date?: Date
}

export const ExpenseDate: FC<ExpenseDateProps> = ({ date = new Date() }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()

  return (
    <div className='flex w-24 h-24 font-bold justify-center items-center text-lg border border-black flex-col mr-8'>
      <div>{month}</div>
      <div className='text-xs'>{year}</div>
      <div className='text-3xl'>{day}</div>
    </div>
  )
}
