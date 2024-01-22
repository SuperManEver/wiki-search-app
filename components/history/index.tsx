import React from 'react'

// utils
import { getUserFromClerkID, isUserLoggedIn } from '@/utils/auth'
import { prisma } from '@/utils/db'

// styles
import css from './styles.module.scss'

const getData = async () => {
  const user = await getUserFromClerkID()
  const history = await prisma.searchHistoryEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return { history }
}

async function History() {
  if (!isUserLoggedIn) {
    return null
  }

  const { history } = await getData()

  console.log(history)

  return (
    <div className={css.root}>
      <h3>You recently searched</h3>

      <div>
        {history.map((item) => (
          <div key={item.id}>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History
