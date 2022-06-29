import { FC } from 'react'

interface ChartBarProps {
  value: number
  label: string
  maxValue: number
}
export const ChartBar: FC<ChartBarProps> = ({ label, maxValue, value }) => {
  let barFillHeight = '0%'

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%'
  }
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='h-24 w-3 border-2 border-black rounded-xl flex justify-end flex-col overflow-hidden'>
        <div
          style={{ height: barFillHeight }}
          className='bg-red-300 w-full transition-all ease-out'
        ></div>
      </div>
      <div className='text-xs'>{label}</div>
    </div>
  )
}
