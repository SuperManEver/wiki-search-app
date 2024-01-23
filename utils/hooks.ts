import { useState, useCallback } from 'react'

import { newHistoryEntry } from '@/utils/api'
import { BASE_URL } from '@/utils/constants'

export function useWikiSearch<T>() {
  const [status, setStatus] = useState<{
    loading: boolean
    error?: unknown
    data?: T[]
  }>({
    loading: false,
  })

  const search = useCallback(async (query: string) => {
    const queryParams = new URLSearchParams({ q: query, limit: '20' })
    const url = `${BASE_URL}?${queryParams.toString()}`

    setStatus({ loading: true })

    try {
      newHistoryEntry(query).then()

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
