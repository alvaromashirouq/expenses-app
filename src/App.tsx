import './App.css'
import { Card } from './components/UI/Card'
import Expenses from './components/Expenses/Expenses'
import { NewExpense } from './components/NewExpense/NewExpense'

function App() {
  return (
    <div className='max-w-5xl mx-auto h-full'>
      <Card className='mt-28'>
        <NewExpense expense={''} amount={0} />
        <Expenses />
      </Card>
    </div>
  )
}

export default App
