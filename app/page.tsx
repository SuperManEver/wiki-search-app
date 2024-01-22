// styles
import css from './page.module.scss'

import Header from '@/components/header'
import WikiSearch from '@/components/wiki-search'
import History from '@/components/history'

function Home() {
  return (
    <main className={css.root}>
      <Header />
      <History />
      <WikiSearch />
    </main>
  )
}

export default Home
