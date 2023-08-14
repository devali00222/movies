// main imports
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

// interface for schema
interface TblGenreAttributes {
  id: number;
  genre: string;
}
type TblGenreCreationAttributes = Optional<TblGenreAttributes, "id">;
export interface TblGenreInstance
  extends Model<TblGenreAttributes, TblGenreCreationAttributes>,
    TblGenreAttributes {}

// schema creation
export const tblgenre = sequelize.define<TblGenreInstance>(
  "tblgenre",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
