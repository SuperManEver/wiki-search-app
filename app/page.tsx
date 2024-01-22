// vendor
import { auth } from '@clerk/nextjs'

// styles
import css from './page.module.css'

import WikiSearch from '@/components/wiki-search'

function Home() {
  const { userId } = auth()

  console.log('current user: ', userId)

  return (
    <main className={css.root}>
      <header></header>

      <WikiSearch />
    </main>
  )
}

export default Home
