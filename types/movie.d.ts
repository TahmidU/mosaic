import { ISocials } from "./socials";

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

export interface IMovieGenre {
  id: number;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  logo_path: ?string;
  name: string;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ICast {
  adult: boolean;
  gender: ?number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: ?string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: ?number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: ?string;
  credit_id: string;
  department: string;
  job: string;
}

export interface ICredit {
  cast: ICast[];
  crew: ICrew[];
}
export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IMovieCollection;
  budget: number;
  genres: IMovieGenre[];
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
}
