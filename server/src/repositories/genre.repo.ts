import { CreateOpject, UpdateOpject } from "../interfaces/genresInterface";
import { tblGenre } from "../models/tblgenre";

class GenreRepo {
  public static async getAllGenres(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const genres = await tblGenre.findAll({
        offset,
        limit,
      });
      return genres;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async getOneGenre(genreId: number) {
    try {
      const genre = await tblGenre.findAll({
        where: {
          id: genreId,
        },
      });
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async postGenre(createOpject: CreateOpject) {
    try {
      const genre = await tblGenre.create(createOpject);
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async updateGenre(updateOpject: UpdateOpject, genreId: number) {
    try {
      const genre = await tblGenre.update(updateOpject, {
        where: { id: genreId },
      });
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async deleteGenre(genreId: number) {
    try {
      await tblGenre.destroy({
        where: {
          id: genreId,
        },
      });
      return;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
}

export default GenreRepo;
