// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  users: User[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.user.create({
    data: {
      email: 'sdkfkjsd@flkdsfjk.com',
      name: 'hello world',
    }
  })
  const users = await prisma.user.findMany();
  res.status(200).json({ users })
}
