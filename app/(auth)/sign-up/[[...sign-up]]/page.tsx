// vendor
import { SignUp } from '@clerk/nextjs'

// ui
import Button from '@/components/button'
import Link from 'next/link'

// styles
import css from './styles.module.scss'

function SignUpPage() {
  return (
    <div className={css.root}>
      <Link className={css.backButton} href="/">
        <Button>Back</Button>
      </Link>

      <SignUp afterSignUpUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
