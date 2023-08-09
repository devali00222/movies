// main imports
import { DataType, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";


// interface for schema
interface TblRoleAttributes {
  id: number;
  name: string;
}
type TblRoleCreationAttributes = Optional<TblRoleAttributes, "id">;
export interface TblRoleInstance
  extends Model<TblRoleAttributes, TblRoleCreationAttributes>,
    TblRoleAttributes {}


// schema creation
export const tblRole = sequelize.define<TblRoleInstance>(
  "tblRole",
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
