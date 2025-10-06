import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const USERS_PATH = path.join(process.cwd(), 'public', 'data', 'users.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user, password } = req.body;
    if (!user || !password) {
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
    }
    const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8'));
    const found = users.find((u: any) => u.user === user && u.password === password);
    if (found) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
  }
  res.status(405).end();
}
