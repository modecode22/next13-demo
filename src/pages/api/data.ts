// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {


  const data = [
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
    { name: "name", description: "a looote of des" },
  ];
  res.status(200).json(data)
}
