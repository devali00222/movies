import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";
import { tblMovieModel } from "./tblMovie";
import { tblUser } from "./tblUser";

interface TblFavoritesAttributes {
  id: number;
  userId: number;
  favoritId: number;
}
type TblFavoritesCreationAttributes = Optional<TblFavoritesAttributes, "id">;

export interface TblFavoritesInstace
  extends Model<TblFavoritesAttributes, TblFavoritesCreationAttributes>,
    TblFavoritesAttributes {}

export const tblFavorites = sequelize.define<TblFavoritesInstace>(
  "tblFavorites",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: tblUser,
        key: "id",
      },
    },
    favoritId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: tblMovieModel,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);
