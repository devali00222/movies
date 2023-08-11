import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblQualifierAttributes {
  id: number;
  name: string;
}

type TblQualifierCreationAttributes = Optional<TblQualifierAttributes, "id">;
export interface TblQualifierInstance
  extends Model<TblQualifierAttributes, TblQualifierCreationAttributes>,
    TblQualifierAttributes {}

export const tblQualifier = sequelize.define<TblQualifierInstance>(
  "tblQualifier",
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
