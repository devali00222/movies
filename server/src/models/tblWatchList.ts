import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";


interface TblWatchListAttributes {
  id: number;
  userId: number;
  movieId: number;
}
type TblWatchListCreationAttributes = Optional<TblWatchListAttributes, "id">;

export interface TblWatchListInstace
  extends Model<TblWatchListAttributes, TblWatchListCreationAttributes>,
    TblWatchListAttributes {}

export const tblWatchList = sequelize.define<TblWatchListInstace>(
  "tblWatchList",
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
        model: "tblUser",
        key: "id",
      },
    },
    movieId: {
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
