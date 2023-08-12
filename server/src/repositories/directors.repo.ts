import { CreateOpject, UpdateOpject } from "../interfaces/directorsinterface";
import { tblDirector } from "../models/tblDirector";

class DirectorRepo {
  /**
   * getAllDirectors
   */
  public static async getAllDirectors(page: number, limit: number) {
    const offset = (page - 1) * limit;
    try {
      const directors = await tblDirector.findAll({
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
      const director = await tblDirector.findOne({
        where: {
          id: directorId,
        },
      });
      if(!director) throw new Error(`director with id ${directorId} dosen't exist`)
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
      const director = await tblDirector.create(createOpject);
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
      const director = await tblDirector.update(updateOpject, {
        where: {
          id: directorId,
        },
      });
      if(director[0] === 0) throw new Error(`genre with this id ${directorId} dosen't exist`)
      return;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
  /**
   * deleteDirector
   */
  public static async deleteDirector(directorId: number) {
    try {
      const director = await tblDirector.destroy({
        where: {
          id: directorId,
        },
      });
      if(director === 0) throw new Error(`genre with this id ${directorId} dosen't exist`)
      return;
    } catch (error) {
      throw new Error("Unable to fetch directors data");
    }
  }
}
export default DirectorRepo;
