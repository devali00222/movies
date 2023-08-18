import { CreateOpject, UpdateOpject } from "../controllers/Genres/genresInterface";
import { tblgenre } from "../models/tblgenre";

class GenreRepo {
  public static async getAllGenres(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const genres = await tblgenre.findAll({
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
      const genre = await tblgenre.findOne({
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
      const genre = await tblgenre.create(createOpject);
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async updateGenre(updateOpject: UpdateOpject, genreId: number) {
    try {
      const genre = await tblgenre.update(updateOpject, {
        where: { id: genreId },
      });
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async deleteGenre(genreId: number) {
    try {
      const genre = await tblgenre.destroy({
        where: {
          id: genreId,
        },
      });
      return genre;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
}

export default GenreRepo;
