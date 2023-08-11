import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblDirectorAttributes {
  id: number;
  name: string;
}
type TblDirectorCreationAttributes = Optional<TblDirectorAttributes, "id">;

export interface TblDirectorInstance
  extends Model<TblDirectorAttributes, TblDirectorCreationAttributes>,
    TblDirectorAttributes {}

export const tblDirector = sequelize.define<TblDirectorInstance>(
  "tblDirector",
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
