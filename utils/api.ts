const createURL = (path: string): string => window.location.origin + path

const HISTORY_PATH = 'history'

export const newHistoryEntry = async (title: string) => {
  const url = createURL(`/api/${HISTORY_PATH}`)

  const params = {
    method: 'POST',
    body: JSON.stringify({ title }),
  }

  const request = new Request(url, params)
  const res = await fetch(request)

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on API server!')
  }
}
