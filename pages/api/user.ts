import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
import { UserI } from 'utils/types';

const prisma = new PrismaClient();

type Data = {
  error: string;
  status: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'GET') {
      const id = req.query.id;

      let result = null;

      if (id)
        result = await prisma.user.findFirst({ where: { id: Number(id) } });
      else result = await prisma.user.findMany();

      res.status(200).json({ status: 'success', error: '', data: result });
    } else if (req.method === 'POST') {
      const postData: UserI = req.body;
      const result = await prisma.user.create({
        data: { ...postData },
      });

      if (!result) {
        return res.status(400).send({
          status: 'failed',
          error: 'Unable to create user in the database',
        });
      }

      res.status(200).json({ status: 'success', error: '' });
    } else if (req.method === 'PATCH') {
      const { user, id } = req.body as { user: Partial<UserI>; id: number };

      const result = await prisma.user.update({
        where: { id },
        data: { ...user },
      });

      if (!result) {
        return res.status(400).send({
          status: 'failed',
          error: 'Unable to update user in the database',
        });
      }

      res.status(200).json({ status: 'success', error: '', data: result });
    } else if (req.method === 'DELETE') {
      const id = Number(req.query.id);

      const result = await prisma.user.delete({
        where: { id },
      });

      if (!result) {
        return res.status(400).send({
          status: 'failed',
          error: 'Unable to delete user in the database',
        });
      }

      res.status(200).json({ status: 'success', error: '', data: result });
    } else {
      return res
        .status(400)
        .send({ status: 'failed', error: 'Wrong HTTP Method' });
    }
  } catch (error: any) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ status: 'failed', error: error.message });
  }
}
