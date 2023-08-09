import { DataType, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";

interface TblGendreAttributes {
  id: number;
  name: string;
}

type TblGendreCreationAttributes = Optional<TblGendreAttributes, "id">;
export interface TblGendreInstance
  extends Model<TblGendreAttributes, TblGendreCreationAttributes>,
    TblGendreAttributes {}

export const tblGendre = sequelize.define<TblGendreInstance>(
  "tblGendre",
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
