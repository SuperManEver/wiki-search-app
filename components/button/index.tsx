import React from 'react'
import cn from 'clsx'

import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
}

function Button({ children, type = 'primary' }: IProps) {
  const styleCn = cn({ [css[type]]: true })

  return <button className={cn(css.root, styleCn)}>{children}</button>
}

export default Button
