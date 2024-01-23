import { Suspense } from 'react'

// styles
import css from './page.module.scss'

import Header from '@/components/header'
import WikiSearch from '@/components/wiki-search'
import History from '@/components/history'

// temp
import { HistoryPlaceholder } from '@/components/placeholders'

function Home() {
  return (
    <main className={css.root}>
      <section>
        <Header />
        <Suspense fallback={<HistoryPlaceholder />}>
          <History />
        </Suspense>
      </section>
      <WikiSearch />
    </main>
  )
}

export default Home
