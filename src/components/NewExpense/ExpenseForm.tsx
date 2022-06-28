import React, { FC } from 'react'

interface ExpenseFormProps {
  expense: string
  amount: number
}

export const ExpenseForm: FC<ExpenseFormProps> = (props) => {
  return (
    <form className='bg-white py-4'>
      <div className='grid grid-cols-2 px-4 mb-6 gap-4  w-full'>
        <div className='  flex gap-2 flex-col'>
          <label htmlFor='expense'>Expense</label>
          <input name='expense' type='text' className='w-full p-2 border-black border-2' />
        </div>
        <div className=' flex gap-2 flex-col'>
          <label htmlFor='amount'>Amount</label>
          <input name='amount' type='text' className='p-2 border-black border-2' />
        </div>
        <div className=' flex gap-2 flex-col'>
          <label htmlFor='date'>Date</label>
          <input name='date' type='date' className='p-2 border-black border-2' />
        </div>
      </div>
      <div className='w-full px-4 flex justify-end'>
        <button className='py-2 px-4 border-black border'>Save</button>
      </div>
    </form>
  )
}
