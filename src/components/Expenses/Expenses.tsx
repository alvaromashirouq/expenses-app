import { FC, useState } from 'react'
import { ExpenseI } from '../../App'
import { Card } from '../UI/Card'
import { ExpenseFilter } from './ExpenseFilter'
import { ExpensesChart } from './ExpensesChart'
import { ExpensesList } from './ExpensesList'

const Expenses: FC<{ expenses: ExpenseI[] }> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense: ExpenseI) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='w-full p-4'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
