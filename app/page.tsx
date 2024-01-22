// vendor
import { auth, SignOutButton } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

// styles
import css from './page.module.css'

import WikiSearch from '@/components/wiki-search'

function Home() {
  const { userId } = auth()

  console.log('current user: ', userId)

  const userSignedId = userId !== null

  return (
    <main className={css.root}>
      <header className={css.header}>
        {userSignedId ? (
          <SignOutButton />
        ) : (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        )}
      </header>

      <WikiSearch />
    </main>
  )
}

export default Home
