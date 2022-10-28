// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  id: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const path = '/api/' + req.query.id;
  console.log('response from ', path);
  res.setHeader('Cache-Control', `public, s-maxage=60, stale-while-revalidate=60`);
  res.status(200).json({ name: new Date().toISOString(), id: req.query.id as string });
}
