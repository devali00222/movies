import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblDirectorAttributes {
  id: number;
  director: string;
}
type TblDirectorCreationAttributes = Optional<TblDirectorAttributes, "id">;

export interface TblDirectorInstance
  extends Model<TblDirectorAttributes, TblDirectorCreationAttributes>,
    TblDirectorAttributes {}

export const tbldirector = sequelize.define<TblDirectorInstance>(
  "tbldirector",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    director: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
