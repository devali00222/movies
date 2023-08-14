export interface CreateOpject {
  title: string;
  rating?: number | null;
  imdbVotes?: number | null;
  year?: number | null;
  genreId?: number | null;
  directorId?: number | null;
  imdb?: number | null;
  qualifierId?: number | null;
}
export interface UpdateOpject {
  title?: string;
  rating?: number | null;
  imdbVotes?: number | null;
  year?: number | null;
  genreId?: number | null;
  directorId?: number | null;
  imdb?: number | null;
  qualifierId?: number | null;
}
