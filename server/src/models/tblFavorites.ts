import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

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
        model: "tbluser",
        key: "id",
      },
    },
    favoritId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "tblmovie",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);
