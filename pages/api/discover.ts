import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import payload from "../../components/atoms/Button/Button.stories";

//https://api.themoviedb.org/3
export default function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=${process.env.MOVIE_DB_API_KEY}`
        )
        .then((data) => {
          res.json(data.data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            status: false,
            error: err,
            message: "Internal Server Error",
            payload: {},
          });
        });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end("Method not Allowed");
      break;
  }

  //res.status(200).json({ stuff: process.env.MOVIE_DB_API_KEY });
}
