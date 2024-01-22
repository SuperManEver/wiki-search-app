// vendor
import { auth } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

// styles
import css from './page.module.css'

import WikiSearch from '@/components/wiki-search'

function Home() {
  const { userId } = auth()

  console.log('current user: ', userId)

  return (
    <main className={css.root}>
      <header className={css.header}>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </header>

      <WikiSearch />
    </main>
  )
}

export default Home
