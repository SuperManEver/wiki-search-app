import css from './page.module.css'

import WikiSearch from '@/app/components/wiki-search'

function Home() {
  return (
    <main className={css.root}>
      <WikiSearch />
    </main>
  )
}

export default Home
