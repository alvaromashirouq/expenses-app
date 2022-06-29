import { FC } from 'react'
import { ExpenseForm } from './ExpenseForm'
import { nanoid } from 'nanoid'
import { ExpenseI } from '../../App'

interface NewExpenseProps {
  onAddExpense: (expense: ExpenseI) => void
}
export interface NewExpenseItem {
  title: string
  amount: string
  date: Date
}

export const NewExpense: FC<NewExpenseProps> = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData: NewExpenseItem) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    }
    onAddExpense(expenseData)
  }

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
