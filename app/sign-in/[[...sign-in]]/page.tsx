import { SignIn } from '@clerk/nextjs'

import css from './styles.module.scss'

function SignInPage() {
  return (
    <div className={css.root}>
      <SignIn />
    </div>
  )
}

export default SignInPage
