'use client'

import { useState, ChangeEvent } from 'react'
import type { WikiSearchResult } from '@/app/types'

import { useWikiSearch } from '@/app/utils/hooks'

// UI
import SearchItem from '@/app/components/search-item'
import SearchInput from '@/app/components/search-input'

// styles
import css from './styles.module.scss'

function WikiSearch() {
  const [query, setQuery] = useState<string>('')
  const { data, clearData } = useWikiSearch<WikiSearchResult>(query)

  const handleQueryChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value

    setQuery(value)
  }

  const clearInput = () => {
    setQuery('')
    clearData()
  }

  return (
    <div className={css.root}>
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        onInputClear={clearInput}
        className={css.searchWrapper}
      />

      <div>
        {data && data.map((item) => <SearchItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default WikiSearch
