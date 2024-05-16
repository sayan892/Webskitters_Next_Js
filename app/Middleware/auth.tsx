import { NextApiRequest, NextApiResponse } from 'next';

export default function authMiddleware(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    const { id, password } = req.query;

    if (id === 'webskitters' && password === 'webskitters') {
        next();
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
}
