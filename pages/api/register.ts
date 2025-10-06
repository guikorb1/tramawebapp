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
    const exists = users.find((u: any) => u.user === user);
    if (exists) {
      return res.status(409).json({ error: 'Usuário já cadastrado.' });
    }
    // Gera id incremental
    let newId = 1;
    if (users.length > 0) {
      newId = Math.max(...users.map((u: any) => u.id)) + 1;
    }
    const newUser = { id: newId, user, password };
    users.push(newUser);
    fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
    return res.status(201).json({ success: true });
  }
  res.status(405).end();
}
