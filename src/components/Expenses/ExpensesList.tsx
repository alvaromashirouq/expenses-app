import { FC } from 'react'
import { ExpenseI } from '../../App'
import { ExpenseItem } from './ExpenseItem'

interface ExpensesListProps {
  expenses: ExpenseI[]
}

export const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className='text-center text-lg font-bold'>No expenses found</p>
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  )
}
