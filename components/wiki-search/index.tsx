'use client'

import { useState, ChangeEvent, KeyboardEvent, useCallback } from 'react'
import type { WikiSearchResult } from '@/types'

import { useWikiSearch } from '@/utils/hooks'

// UI
import SearchItem from '@/components/search-item'
import SearchInput from '@/components/search-input'
import Button from '@/components/button'

// styles
import css from './styles.module.scss'

interface IProps {
  className?: string
}

function WikiSearch({ className }: IProps) {
  const [query, setQuery] = useState<string>('')
  const { data, clearData, search } = useWikiSearch<WikiSearchResult>(query)

  const handleQueryChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value

    setQuery(value)
  }

  const handleSearch = () => {
    search(query)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const clearInput = () => {
    setQuery('')
    clearData()
  }

  return (
    <div className={className}>
      <div className={css.searchWrapper}>
        <SearchInput
          value={query}
          onChange={handleQueryChange}
          onInputClear={clearInput}
          onKeyPress={handleKeyPress}
        />

        <Button className={css.searchButton} onClick={handleSearch}>
          Search
        </Button>
      </div>

      <div>
        {data && data.map((item) => <SearchItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default WikiSearch
