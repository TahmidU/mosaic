import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      try {
        const results = await axios({
          method: "get",
          headers: { "Content-type": "application/json" },
          url: `${process.env.MOVIE_DB_WEB_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${process.env.MOVIE_DB_API_KEY}`,
        });
        res.status(results.status).json(results.data);
      } catch (error) {
        const err = error as AxiosError;
        res.status(err.response?.status || 500).json(err.response?.data);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end("Method not Allowed");
      break;
  }
}

export default handle;
