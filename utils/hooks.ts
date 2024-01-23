import { useState, useCallback } from 'react'
import { useUser } from '@clerk/nextjs'

// utils
import { newHistoryEntry } from '@/utils/api'
import { BASE_URL, API_SEARCH_ENTRIES_LIMIT } from '@/utils/constants'

export function useWikiSearch<T>() {
  const { user, isLoaded } = useUser()
  const [status, setStatus] = useState<{
    loading: boolean
    error?: unknown
    data?: T[]
  }>({
    loading: false,
  })

  const search = useCallback(async (query: string) => {
    const queryParams = new URLSearchParams({
      q: query,
      limit: API_SEARCH_ENTRIES_LIMIT,
    })
    const url = `${BASE_URL}?${queryParams.toString()}`

    setStatus({ loading: true })

    try {
      if (isLoaded && user) {
        newHistoryEntry(query).then()
      }

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error('Failed to fetch data from Wikipedia')
      }

      const data = await res.json()

      if (data.pages) {
        setStatus({ loading: false, data: data.pages })
      } else {
        setStatus({ loading: false, data: [] })
      }
    } catch (error) {
      setStatus({ loading: false, error })
      console.error(error)
    }
  }, [])

  const clearData = useCallback(() => {
    setStatus({
      loading: false,
      error: null,
      data: [],
    })
  }, [])

  return { ...status, clearData, search }
}
