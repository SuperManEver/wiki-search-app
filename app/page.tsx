// styles
import css from './page.module.scss'

import Header from '@/components/header'
import WikiSearch from '@/components/wiki-search'

function Home() {
  return (
    <main className={css.root}>
      <Header />
      <WikiSearch />
    </main>
  )
}

export default Home
