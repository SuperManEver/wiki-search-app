'use client'

// vendor
import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

import css from './styles.module.scss'

function Header() {
  const { user, isLoaded } = useUser()

  return (
    <header className={css.header}>
      {!isLoaded && <p>Loading...</p>}
      {isLoaded &&
        (user ? (
          <div className={css.userInfo}>
            <p className={css.userName}>
              {user?.firstName + ' ' + user?.lastName}
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className={css.authMenu}>
            <Link href="/sign-in">
              <Button type="secondary">Login</Button>
            </Link>

            <Link href="/sign-up">
              <Button>Sign up</Button>
            </Link>
          </div>
        ))}
    </header>
  )
}

export default Header
