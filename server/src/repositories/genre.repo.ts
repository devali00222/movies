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
      const genre = await tblGenre.findOne({
        where: {
          id: genreId,
        },
      });
      if(!genre) throw new Error(`genre with id ${genreId} dosen't exist`)
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
      if(genre[0] === 0) throw new Error(`genre with this id ${genreId} dosen't exist`)
      return;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  public static async deleteGenre(genreId: number) {
    try {
      const genre = await tblGenre.destroy({
        where: {
          id: genreId,
        },
      });
      if(genre === 0) throw new Error(`genre with this id ${genreId} dosen't exist`)
      return;
    } catch (error) {
      throw new Error("Unable to fetch movies from the database.");
    }
  }
}

export default GenreRepo;
