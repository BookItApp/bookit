// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { location, type } = req.query;
    console.log(type)
    const accomodations = await prisma.accomodation.findMany({
      where: {
        location:
          location?.toString() !== "undefined" && location?.toString() !== ""
            ? location?.toString()
            : undefined,
        type: type ? type.toString() : undefined,
      },
    });
    return res.status(200).json(accomodations);
  }
  return res.status(405).send("Method not allowed.");
};

export default handler;
