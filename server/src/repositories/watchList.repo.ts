import {tblWatchList} from "../models/tblWatchList"

class WatchListRepo {
  public static async getAllList(userId: number) {
    try {
      const list = await tblWatchList.findAll({
        where: {
          userId,
        },
      });
      return list;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async deleteAllList(userId: number) {
    try {
      const affectedRows = await tblWatchList.destroy({
        where: {
          userId,
        },
      });
      return affectedRows;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async addToList(userId: number,movieId:number) {
    try {
      const movie = await tblWatchList.findOne({
        where: {
          userId,
          movieId
        },
      });
      return movie;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async deleteFromList(userId: number,movieId:number) {
    try {
      const affectedRows = await tblWatchList.destroy({
        where: {
          userId,
          movieId
        },
      });
      return affectedRows;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
}
export default WatchListRepo