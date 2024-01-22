import React from 'react'
import cn from 'clsx'

import css from './styles.module.scss'

interface IProps {
  children: React.ReactNode
}

function Button({ children }: IProps) {
  return <button className={cn(css.root, css.blue)}>{children}</button>
}

export default Button
