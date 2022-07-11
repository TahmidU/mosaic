import { ISocials } from "./socials";
import {
  ICredit,
  IGenre,
  IProductionCompanies,
  IProductionCountries,
  ISpokenLanguages,
} from "./tv_movies";

export interface ICreateBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: ?string;
}

export interface IEpisodeAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: ?number;
  season_number: number;
  still_path: ?string;
  vote_average: number;
  vote_count: number;
}

export interface INetworks {
  id: number;
  name: string;
  logo_path: ?string;
  origin_country: string;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: ?string;
  season_number: number;
}

export interface ITVDetails {
  adult: boolean;
  backdrop_path: ?string;
  created_by: ICreateBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpisodeAir;
  name: string;
  next_episode_to_air: IEpisodeAir;
  networks: INetworks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: ?string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  seasons: ISeason[];
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  external_ids: ISocials;
  credits: ICredit;
}
