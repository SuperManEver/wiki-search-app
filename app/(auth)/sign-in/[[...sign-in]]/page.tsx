import { SignIn } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

// styles
import css from './styles.module.scss'

function SignInPage() {
  return (
    <div className={css.root}>
      <Link className={css.backButton} href="/">
        <Button>Back</Button>
      </Link>

      <SignIn redirectUrl="/" />
    </div>
  )
}

export default SignInPage
