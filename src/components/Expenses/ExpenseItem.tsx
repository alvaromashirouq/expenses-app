import { FC } from 'react'
import { Card } from '../UI/Card'
import { ExpenseDate } from './ExpenseDate'

interface ExpenseItemProps {
  date?: Date
  title?: string
  price?: string | number
}
export const ExpenseItem: FC<ExpenseItemProps> = (props) => {
  const { date, title, price } = props
  return (
    <Card className='expense-item rounded-none flex py-2 w-full items-center  text-lg bg-white mb-3 px-2'>
      <ExpenseDate date={date} />
      <div className='flex-1 flex justify-between items-center capitalize'>
        <h2 className='text-2xl'>{title}</h2>
        <div className='font-bold border-black border p-2'>$ {price}</div>
      </div>
    </Card>
  )
}
