import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { NewExpenseItem } from './NewExpense'
interface ExpenseFormProps {
  onSaveExpenseData: (enteredExpenseData: NewExpenseItem) => void
}

export const ExpenseForm: FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value)
  }
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    }
    onSaveExpenseData(expenseData)
    setDate('')
    setAmount('')
    setTitle('')
  }

  return (
    <form className='bg-white py-4' onSubmit={submitHandler}>
      <div className='grid grid-cols-2 px-4 mb-6 gap-4  w-full'>
        <div className='  flex gap-2 flex-col'>
          <label htmlFor='expense'>Expense</label>
          <input
            name='expense'
            type='text'
            className='w-full p-2 border-black border-2'
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className=' flex gap-2 flex-col'>
          <label htmlFor='amount'>Amount</label>
          <input
            name='amount'
            type='text'
            className='p-2 border-black border-2'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className=' flex gap-2 flex-col'>
          <label htmlFor='date'>Date</label>
          <input
            name='date'
            type='date'
            className='p-2 border-black border-2'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='w-full px-4 flex justify-end'>
        <button type='submit' className='py-2 px-4 border-black border'>
          Save
        </button>
      </div>
    </form>
  )
}
