// main imports
import { DataType, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

// interface for schema
interface TblGenreAttributes {
  id: number;
  name: string;
}
type TblGenreCreationAttributes = Optional<TblGenreAttributes, "id">;
export interface TblGenreInstance
  extends Model<TblGenreAttributes, TblGenreCreationAttributes>,
    TblGenreAttributes {}

// schema creation
export const tblGenre = sequelize.define<TblGenreInstance>(
  "tblGenre",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
