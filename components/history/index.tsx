import React from 'react'

// utils
import { getUserFromClerkID, isUserLoggedIn } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { HISTORY_RECORDS_DISPLAY_LIMIT } from '@/utils/constants'

// styles
import css from './styles.module.scss'

const getData = async () => {
  const user = await getUserFromClerkID()

  const history = await prisma.searchHistoryEntry.findMany({
    where: {
      userId: user.id,
    },
    take: HISTORY_RECORDS_DISPLAY_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return { history }
}

async function History() {
  if (!isUserLoggedIn()) {
    return null
  }

  const { history } = await getData()

  return (
    <div className={css.root}>
      <h3 className={css.title}>You recently searched</h3>

      <ul>
        {history.map((item) => (
          <li key={item.id}>
            <p className={css.historyEntry}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
