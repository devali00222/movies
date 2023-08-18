import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblUserAttributes {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
}
type TblUserCreationAttributes = Optional<TblUserAttributes, "id">;
export interface TblUserInstance
  extends Model<TblUserAttributes, TblUserCreationAttributes>,
    TblUserAttributes {}

export const tblUser = sequelize.define<TblUserInstance>(
  "tblUser",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
  },
  { freezeTableName: true }
);
