'use client'

// vendor
import { useState, ChangeEvent, KeyboardEvent, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

// types
import type { WikiSearchResult } from '@/types'

// hooks
import { useWikiSearch } from '@/utils/hooks'

// UI
import SearchItem from '@/components/search-item'
import SearchInput from '@/components/search-input'
import Button from '@/components/button'
import Spinner from '@/components/spinner'

// styles
import css from './styles.module.scss'

interface IProps {
  className?: string
}

function WikiSearch({ className }: IProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState<string>('')
  const {
    data = [],
    loading,
    clearData,
    search,
  } = useWikiSearch<WikiSearchResult>()

  const handleQueryChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value

    setQuery(value)
  }

  const handleSearch = () => {
    search(query)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearInput()
    }

    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const clearInput = () => {
    setQuery('')
    clearData()
  }

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 106,
  })

  const virtualItems = virtualizer.getVirtualItems()
  const totalSize = virtualizer.getTotalSize()

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

      <section className={css.listWrapper}>
        {loading ? (
          <div className={css.loadingContainer}>
            <Spinner />
          </div>
        ) : (
          <div
            ref={parentRef}
            style={{
              height: '62vh', // THIS IS IMPORTANT
              overflow: 'auto',
            }}
          >
            <div
              style={{
                height: `${totalSize}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {virtualItems.map((vItem) => {
                const item = data[vItem.index]

                return (
                  <SearchItem
                    key={item.id}
                    item={item}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${vItem.size}px`,
                      transform: `translateY(${vItem.start}px)`,
                    }}
                  />
                )
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default WikiSearch
