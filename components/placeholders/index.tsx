import React from 'react'

import css from './styles.module.scss'

export function HistoryPlaceholder() {
  return (
    <div className={css.root}>
      <div className={css.item}></div>
      <div className={css.item}></div>
      <div className={css.item}></div>
      <div className={css.item}></div>
      <div className={css.item}></div>
    </div>
  )
}
