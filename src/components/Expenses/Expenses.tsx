import { Card } from '../UI/Card'
import { ExpenseItem } from './ExpenseItem'

function Expenses() {
  const expense = [
    { title: 'car insurance', date: new Date(2022, 6, 28), price: 204.23 },
    { title: 'car insurance', date: new Date(2022, 6, 28), price: 204.23 },
  ]
  return (
    <Card className='w-full p-4'>
      <ExpenseItem {...expense[0]} />
      <ExpenseItem {...expense[1]} />
    </Card>
  )
}

export default Expenses
