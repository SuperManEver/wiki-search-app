// vendor
import { auth, SignOutButton } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

// styles
import css from './page.module.scss'

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
          <div className={css.authMenu}>
            <Link href="/sign-in">
              <Button type="secondary">Login</Button>
            </Link>

            <Link href="/sign-up">
              <Button>Sign up</Button>
            </Link>
          </div>
        )}
      </header>

      <WikiSearch />
    </main>
  )
}

export default Home
