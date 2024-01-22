import type { WikiSearchResult } from '@/app/types'

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

      <p dangerouslySetInnerHTML={{ __html: excerpt }} className={css.text} />
    </div>
  )
}

export default SearchItem
