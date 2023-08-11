export interface CreateOpject {
  title: string;
  rating?: number | null;
  imdbVotes?: number | null;
  year?: number | null;
  genre?: number | null;
  director?: number | null;
  imdb?: number | null;
  qualifier?: number | null;
}
export interface UpdateOpject {
  title?: string;
  rating?: number | null;
  imdbVotes?: number | null;
  year?: number | null;
  genre?: number | null;
  director?: number | null;
  imdb?: number | null;
  qualifier?: number | null;
}
