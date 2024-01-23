import { CSSProperties } from 'react'

// utils
import { sanitizeRawHtml } from '@/utils/helpers'

// types
import type { WikiSearchResult } from '@/types'

// styles
import css from './styles.module.scss'

interface IProps {
  item: WikiSearchResult
  style: CSSProperties
}

function SearchItem({ item, style }: IProps) {
  const { title, excerpt } = item

  return (
    <div className={css.root} style={{ ...style }}>
      <p className={css.title}>{title}</p>

      <p
        dangerouslySetInnerHTML={sanitizeRawHtml(excerpt)}
        className={css.text}
      />
    </div>
  )
}

export default SearchItem
