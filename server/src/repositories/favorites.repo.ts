import { tblFavorites } from "../models/tblFavorites";

class FavoritesRepo {
  public static async getAllFavorites(userId: number) {
    try {
      const favorites = await tblFavorites.findAll({
        where: {
          userId,
        },
      });
      return favorites;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async deleteAllFavorites(userId: number) {
    try {
      const affectedRows = await tblFavorites.destroy({
        where: {
          userId,
        },
      });
      return affectedRows;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async addFavorite(userId: number,favoritId:number) {
    try {
      const favorit = await tblFavorites.findOne({
        where: {
          userId,
          favoritId
        },
      });
      return favorit;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
  public static async deleteFavorite(userId: number,favoritId:number) {
    try {
      const affectedRows = await tblFavorites.destroy({
        where: {
          userId,
          favoritId
        },
      });
      return affectedRows;
    } catch (error) {
      throw new Error("Unable to fetch database");
    }
  }
}
export default FavoritesRepo