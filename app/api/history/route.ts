import { getUserFromClerkID } from '@/utils/auth'

export const POST = async (request: Request) => {
  const data = await request.json()
  const user = await getUserFromClerkID()

  console.log('DATA: ', data, user)
}
