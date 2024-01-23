// utils
import { sanitizeRawHtml } from '@/utils/helpers'

// types
import type { WikiSearchResult } from '@/types'

// styles
import css from './styles.module.scss'

interface IProps {
  item: WikiSearchResult
}

function SearchItem({ item }: IProps) {
  const { title, excerpt } = item

  return (
    <div className={css.root}>
      <p className={css.title}>{title}</p>

      <p
        dangerouslySetInnerHTML={sanitizeRawHtml(excerpt)}
        className={css.text}
      />
    </div>
  )
}

export default SearchItem
