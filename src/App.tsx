import './App.css'
import { Card } from './components/UI/Card'
import Expenses from './components/Expenses/Expenses'
import { NewExpense, NewExpenseItem } from './components/NewExpense/NewExpense'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export interface ExpenseI extends NewExpenseItem {
  id: string
}
const DUMMY_DATA: ExpenseI[] = [
  { id: nanoid(), title: 'car insurance', date: new Date(2022, 6, 28), amount: '204.23' },
  { id: nanoid(), title: 'car insurance', date: new Date(2022, 1, 28), amount: '204.23' },
  { id: nanoid(), title: 'car insurance', date: new Date(2022, 4, 28), amount: '24.23' },
  { id: nanoid(), title: 'car insurance', date: new Date(2021, 1, 28), amount: '4.23' },
]

function App() {
  const [expenses, setExpenses] = useState<ExpenseI[]>(DUMMY_DATA)
  const addExpenseHandler = (expense: ExpenseI) => {
    setExpenses((prevState) => [...prevState, expense])
  }
  return (
    <div className='max-w-5xl mx-auto h-full'>
      <Card className='mt-28'>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </Card>
    </div>
  )
}

export default App
