import React, { ChangeEvent, FC } from 'react'

interface ExpenseFilterProps {
  onChangeFilter: (value: string) => void
  selected: string
}

export const ExpenseFilter: FC<ExpenseFilterProps> = ({ onChangeFilter, selected }) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className='py-4 '>
      <div className='flex justify-between items-center'>
        <label htmlFor='filter-date' className='text-lg'>
          Filter by year
        </label>
        <select
          name='filter-date'
          onChange={dropdownChangeHandler}
          className='py-2 px-3 border-2 border-black'
          value={selected}
        >
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  )
}
