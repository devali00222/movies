import { Request, Response } from "express";
import MoviesRepo from "../../repositories/movies.repo";
class MoviesController {
  public static async getAllMovies(req: Request, res: Response) {
    const { page, limit, ...query } = req.query;
    const parsedPage = parseInt(page as string, 10);
    const parsedLimit = parseInt(limit as string, 10);
    const prevPage = parsedPage && parsedPage > 1 ? parsedPage - 1 : null;
    const NextPage = parsedPage ? parsedPage + 1 : 2;
    try {
      let moviesData;
      if (Object.keys(query).length === 0) {
        const movies = await MoviesRepo.getAllMovies(
          parsedPage || 1,
          parsedLimit || 10
        );
        moviesData = movies;
      } else {
        const movies = await MoviesRepo.fillterMovies(
          parsedPage || 1,
          parsedLimit || 10,
          query
        );
        moviesData = movies;
      }

      // response of movies you get
      res.status(200).json({
        data: moviesData,
        totalItems: moviesData.length,
        currentPage: page,
        itemsPerPage: limit,
        prevPageLink:
          prevPage !== null
            ? `${req.protocol}://${req.get("host")}${req.baseUrl}${
                req.path
              }?page=${prevPage}&limit=${limit}`
            : null,
        nextPageLink: `${req.protocol}://${req.get("host")}${req.baseUrl}${
          req.path
        }?page=${NextPage}&limit=${limit}`,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async getOneMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    try {
      const movie = await MoviesRepo.getOneMovie(parseInt(movieId));
      if (movie) {
        res.status(200).json({
          movie,
        });
      } else {
        res.status(500).json({ error: `can't find movie with id ${movieId}` });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async postMovie(req: Request, res: Response) {
    const {
      title,
      rating,
      imdbVotes,
      year,
      genreId,
      directorId,
      imdb,
      qualifierId,
    } = req.body;
    try {
      const movie = await MoviesRepo.postMovie({
        title,
        rating,
        imdbVotes,
        year,
        genreId,
        directorId,
        imdb,
        qualifierId,
      });
      res.status(201).json({
        status: "created",
        movie,
      });
    } catch (error) {
      res.status(500).json({
        msg: error,
      });
    }
  }
  public static async updateMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    const updateObject = req.body;
    try {
      const movie = await MoviesRepo.getOneMovie(
        parseInt(movieId as string, 10)
      );
      if (movie) {
        const response = await MoviesRepo.updateMovie(
          updateObject,
          parseInt(movieId as string, 10)
        );
        if (response[0] === 0) {
          res.status(500).json({ error: "Unexpected error" });
        } else {
          res.status(201).json({
            status: "updated",
          });
        }
      } else {
        res.status(500).json({ error: `can't find movie with id ${movieId}` });
      }
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  }
  public static async deleteMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    try {
      const movie = await MoviesRepo.getOneMovie(
        parseInt(movieId as string, 10)
      );
      if (movie) {
        const response = await MoviesRepo.deleteMovie(parseInt(movieId));
        if (response === 0) {
          res.status(500).json({ error: `Unexpected error` });
        } else {
          res.status(201).json({
            status: "deleted",
          });
        }
      } else {
        res.status(500).json({ error: `can't find movie with id ${movieId}` });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
export default MoviesController;
