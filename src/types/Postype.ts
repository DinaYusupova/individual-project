export type PostType = {
  id: number;
  ageRating: number;
  alternativeName: string;
  collections: any[];
  countries: Country[];
  createdAt: string;
  description: string;
  enName: any;
  externalId: ExternalId;
  facts: Fact[];
  genres: Genre[];
  movieLength: number;
  name: string;
  names: Name[];
  persons: Person[];
  poster: Poster;
  productionCompanies: any[];
  rating: Rating;
  ratingMpaa: any;
  seasonsInfo: any[];
  sequelsAndPrequels: SequelsAndPrequel[];
  shortDescription: any;
  similarMovies: any[];
  slogan: any;
  spokenLanguages: any[];
  technology: Technology;
  ticketsOnSale: boolean;
  type: string;
  updatedAt: string;
  videos: Videos;
  votes: Votes;
  year: number;
  premiere: Premiere;
  budget: Budget;
  fees: Fees;
  backdrop: Backdrop;
  logo: Logo;
  typeNumber: number;
  watchability: Watchability;
  top10: any;
  top250: any;
  status: any;
  deletedAt: any;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
};

export type Country = {
  name: string;
};

export type ExternalId = {
  kpHD: any;
  imdb: string;
  tmdb: number;
};

export type Fact = {
  value: string;
  type: string;
  spoiler: boolean;
};

export type Genre = {
  name: string;
};

export type Name = {
  name: string;
  language?: string;
  type?: string;
};

export type Person = {
  id: number;
  photo: string;
  name: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
};

export type Poster = {
  url: string;
  previewUrl: string;
};

export type Rating = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
};

export type SequelsAndPrequel = {
  id: number;
  name: string;
  enName: any;
  alternativeName: string;
  type: string;
  poster: Poster2;
};

export type Poster2 = {
  url: string;
  previewUrl: string;
};

export type Technology = {
  hasImax: boolean;
  has3D: boolean;
};

export type Videos = {
  trailers: Trailer[];
  teasers: any[];
};

export type Trailer = {
  url: string;
  name: string;
  site: string;
  type: string;
};

export type Votes = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type Premiere = {
  world: string;
};

export type Budget = {};

export type Fees = {
  world: World;
  russia: Russia;
  usa: Usa;
};

export type World = {};

export type Russia = {};

export type Usa = {};

export type Backdrop = {
  url: string;
  previewUrl: string;
};

export type Logo = {
  url: string;
};

export type Watchability = {
  items: any[];
};


