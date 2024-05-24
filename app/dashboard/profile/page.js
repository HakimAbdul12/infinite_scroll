import React from 'react'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
export default async function Page() {
  const session = await getServerSession(options)
  return (
    <div>
      {JSON.stringify(session)}
      <img alt='profile' src={session.user.image} className="w-24 h-24 rounded-full"/>
    </div>
  )
}

