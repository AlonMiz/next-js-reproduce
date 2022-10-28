import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let used, unused;
  try {
    used = readFileSync(path.join(process.cwd(), './components/Used.tsx')).toString();
  } catch (e) {
    used = e;
  }
  try {
    unused = readFileSync(path.join(process.cwd(), './components/Unused.tsx')).toString();
  } catch (e) {
    unused = e;
  }

  console.log('response from ', { used, unused });
  res.status(200).send(JSON.stringify({ used, unused }, null, 4));
}
