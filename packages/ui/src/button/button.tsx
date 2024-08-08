import { ReactNode } from 'react'
import clsx from 'clsx'
import { normalize } from '@maeertin/utils'
import classes from './button.module.css'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export const Button = (props: ButtonProps) => {
  const { children, className, appName } = props

  return (
    <button
      className={clsx(classes.root, className)}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      <p>normalize test: {normalize(30, 0, 100)}</p>
    </button>
  )
}
