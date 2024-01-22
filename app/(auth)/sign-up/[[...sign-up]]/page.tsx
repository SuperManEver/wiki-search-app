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
      <Link className={css.backButton} href="/sign-in">
        <Button>Back</Button>
      </Link>

      <SignUp
        routing="path"
        afterSignInUrl="/new-user"
        afterSignUpUrl="/new-user"
        redirectUrl="/new-user"
      />
    </div>
  )
}

export default SignUpPage