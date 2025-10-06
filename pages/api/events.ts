import type { NextApiRequest, NextApiResponse } from "next";

// Dados
const eventos = [
  {
    id: 1,
    title: "Aniversário da Ana",
    start: "2025-10-25T19:00:00.000Z",
    end: "2025-10-25T23:00:00.000Z",
  },
  {
    id: 2,
    title: "Encontro de família",
    start: "2025-10-05T12:00:00.000Z",
    end: "2025-10-05T18:00:00.000Z",
  },
  {
    id: 3,
    title: "Viagem com primos",
    start: "2025-09-20T00:00:00.000Z",
    end: "2025-09-25T00:00:00.000Z",
  },
    {
    id: 4,
    title: "Aniversário Silvia",
    start: "2025-11-04T00:00:00.000Z",
    end: "2025-11-05T00:00:00.000Z",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
   
    return res.status(200).json(eventos);
  } else if (req.method === "POST") {
   
    const novoEvento = req.body;
    // Aqui poderia salvar no banco de dados
    return res
      .status(201)
      .json({ message: "Evento criado com sucesso", evento: novoEvento });
  } else {
    return res.status(405).json({ message: "Método não permitido" });
  }
}
