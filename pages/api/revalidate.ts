import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    const path = `/api/${req.query.id || 1}`;
    await res.revalidate(path);
    return res.json({ revalidated: true, path: path });
  } catch (err: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(
      JSON.stringify({
        error: err.message,
        message: 'Error revalidating',
      })
    );
  }
}
