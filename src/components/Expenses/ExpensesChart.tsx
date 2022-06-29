import { FC } from 'react'
import { ExpenseI } from '../../App'
import { Chart } from '../Chart/Chart'

interface ExpensesChartProps {
  expenses: ExpenseI[]
}

export const ExpensesChart: FC<ExpensesChartProps> = ({ expenses }) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Ago', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += parseFloat(expense.amount)
  }
  return (
    <>
      <Chart dataPoints={chartDataPoints} />
    </>
  )
}
