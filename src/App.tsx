import './App.css'
import { Card } from './components/UI/Card'
import Expenses from './components/Expenses/Expenses'

function App() {
  return (
    <div className='max-w-5xl mx-auto h-full'>
      <Card className='mt-28'>
        <Expenses />
      </Card>
    </div>
  )
}

export default App
