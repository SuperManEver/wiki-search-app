import { getUserFromClerkID } from '@/utils/auth'
import { update } from '@/utils/actions'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const data = await request.json()
  const user = await getUserFromClerkID()

  const entry = await prisma.searchHistoryEntry.create({
    data: {
      content: data.title,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  update(['/history'])

  return NextResponse.json({ data: entry })
}
