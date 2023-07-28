export type PostsType = {
  pagesCount: number;
  films: Film[];
};

export type Film = {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: any;
  isRatingUp: any;
  isAfisha: number;
};

export type Country = {
  country: string;
};

export type Genre = {
  genre: string;
};
