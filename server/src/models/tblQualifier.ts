import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblQualifierAttributes {
  id: number;
  qualifier: string;
}

type TblQualifierCreationAttributes = Optional<TblQualifierAttributes, "id">;
export interface TblQualifierInstance
  extends Model<TblQualifierAttributes, TblQualifierCreationAttributes>,
    TblQualifierAttributes {}

export const tblqualifier = sequelize.define<TblQualifierInstance>(
  "tblqualifier",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    qualifier: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
