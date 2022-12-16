// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.accomodation.create({
    data: {
      name: "Hilton Garden Inn New York-Midtown Park Ave",
      rating: 5,
      description: "A hotel in New York.",
      location: "New York",
      price: 200,
      type: "Apartment",
    },
  });
  const accomodations = await prisma.accomodation.findMany();
  res.status(200).json(accomodations);
};

export default handler;
