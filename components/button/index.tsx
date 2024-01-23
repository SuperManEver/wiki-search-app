import React from 'react'
import cn from 'clsx'

import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
  className?: string
  onClick?(): void
}

function Button({ children, type = 'primary', className, onClick }: IProps) {
  const styleCn = cn({ [css[type]]: true })

  return (
    <button className={cn(css.root, styleCn, className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
