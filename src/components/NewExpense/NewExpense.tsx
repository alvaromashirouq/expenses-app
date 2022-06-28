import { FC } from 'react'
import { ExpenseForm } from './ExpenseForm'

interface NewExpenseProps {
  expense: string
  amount: number
}

export const NewExpense: FC<NewExpenseProps> = (props) => {
  return (
    <div>
      <ExpenseForm expense={''} amount={0} />
    </div>
  )
}
