/**
 *
 * filter movies based on genre and directors and qualifiers
 */
export const getAllMovies = (limit: number, offset: number) => {
  const query: string = `SELECT 
  m.id AS Id,
  m.title AS MovieName,
  m.rating AS Rating,
  m.imdbVotes AS 'IMDB Votes',
  m.year AS Year,
  genre AS Genre,
  director AS Director,
  qualifier AS Qualifier,
  m.imdb AS IMDB 
  FROM tblmovie AS m 
  LEFT JOIN tblgenre AS g ON m.genreId = g.id
  LEFT JOIN tbldirector AS d ON m.directorId = d.id
  LEFT JOIN tblqualifier AS q ON m.qualifierId = q.id 
  LIMIT ${limit} OFFSET ${offset} ;
  `;
  return query;
};
export const getFiltterdMovies = (limit: number, offset: number) => {
  const query: string = `SELECT 
  m.id AS Id,
  m.title AS MovieName,
  m.rating AS Rating,
  m.imdbVotes AS 'IMDB Votes',
  m.year AS Year,
  genre AS Genre,
  director AS Director,
  qualifier AS Qualifier,
  m.imdb AS IMDB 
  FROM tblmovie AS m 
  LEFT JOIN tblgenre AS g ON m.genreId = g.id
  LEFT JOIN tbldirector AS d ON m.directorId = d.id
  LEFT JOIN tblqualifier AS q ON m.qualifierId = q.id 
  WHERE 
   (:genre IS NULL OR g.genre = :genre) 
   AND (:qualifier IS NULL OR q.qualifier = :qualifier)
   AND (:director IS NULL OR d.director = :director)
   AND (:year IS NULL OR m.year >= :year)
   AND (:rating IS NULL OR m.rating >= :rating)
   AND (:imdbVotes IS NULL OR m.imdbVotes >= :imdbVotes)
   AND (:imdb IS NULL OR m.imdb >= :imdb)
   ORDER BY
   CASE
     WHEN :order = 'year' THEN m.year
     WHEN :order = 'rating' THEN m.rating
     WHEN :order = 'imdbVotes' THEN m.imdbVotes
     WHEN :order = 'imdb' THEN m.imdb
     WHEN :order = 'genre' THEN Genre
     WHEN :order = 'director' THEN Director
     WHEN :order = 'qualifier' THEN Qualifier
     WHEN :order = 'title' THEN m.title
     ELSE m.title 
   END
  LIMIT ${limit} OFFSET ${offset} 
  ;
  `;
  return query;
};