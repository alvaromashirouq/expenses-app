import { FC } from 'react'
import { ChartBar } from './ChartBar'

interface ChartProps {
  dataPoints: any[]
}

export const Chart: FC<ChartProps> = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map(({ value }) => value)
  const totalMaximun = Math.max(...dataPointsValues)
  return (
    <div className='flex justify-evenly'>
      {dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMaximun}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  )
}
