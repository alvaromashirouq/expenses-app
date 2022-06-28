import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

interface CardProps {
  className?: string
}

export const Card: FC<PropsWithChildren & CardProps> = (props) => {
  const classNames = clsx('shadow-lg rounded-lg', props.className)
  return <div className={classNames}>{props.children}</div>
}
