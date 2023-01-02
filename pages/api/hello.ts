// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.accomodation.create({
    data: {
      name: "Rosen Inn International",
      photo: "rosen-inn-orlando.jpg",
      rating: 2,
      description:
        "Affordable Orlando vacation hotel near Universal Orlando Resort™, minutes away from world-famous entertainment",
      location: "Orlando",
      price: 64,
      type: "Hotel",
    },
  });
  const accomodations = await prisma.accomodation.findMany();
  res.status(200).json(accomodations);
};

export default handler;
