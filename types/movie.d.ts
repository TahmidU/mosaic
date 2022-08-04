import { ISocials } from "./socials";
import {
  IGenre,
  IProductionCompanies,
  IProductionCountries,
  ISpokenLanguages,
  ICast,
  ICrew,
  ICredit,
  IProviders,
} from "./tv_movies";

export interface IShortMovieDetails {
  id: number;
  src: string;
  review: number;
  movieTitle: string;
  movieReleaseDate: string;
}

export interface IMovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IMovieCollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  external_ids: ?ISocials;
  credits?: ICredit;
  "watch/providers"?: IProviders;
}
