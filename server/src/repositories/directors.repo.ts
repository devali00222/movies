import { CreateOpject, UpdateOpject } from "../controllers/Directors/directorsInterface";
import { tbldirector } from "../models/tblDirector";

class DirectorRepo {
  /**
   * getAllDirectors
   */
  public static async getAllDirectors(page: number, limit: number) {
    const offset = (page - 1) * limit;
    try {
      const directors = await tbldirector.findAll({
        offset,
        limit,
      });
      return directors;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
  /**
   * getOneDirector
   */
  public static async getOneDirector(directorId: number) {
    try {
      const director = await tbldirector.findOne({
        where: {
          id: directorId,
        },
      });
      return director;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
  /**
   * postDirector
   */
  public static async postDirector(createOpject: CreateOpject) {
    try {
      const director = await tbldirector.create(createOpject);
      return director;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
  /**
   * updateDirector
   */
  public static async updateDirector(
    updateOpject: UpdateOpject,
    directorId: number
  ) {
    try {
      const director = await tbldirector.update(updateOpject, {
        where: {
          id: directorId,
        },
      });
      return director;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
  /**
   * deleteDirector
   */
  public static async deleteDirector(directorId: number) {
    try {
      const director = await tbldirector.destroy({
        where: {
          id: directorId,
        },
      });
      return director;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
}
export default DirectorRepo;
