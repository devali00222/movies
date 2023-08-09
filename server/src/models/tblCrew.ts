import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";
import { tblGendre } from "./tblGendre";
import { tblRole } from "./tblRole";

interface TblCrewAttributes {
  id: number;
  name: string;
  birthDate: Date;
  placeOfBirth: string;
  gendre: number;
  nationality: string;
  occupation: number;
}
type TblCrewCreationAttributes = Optional<TblCrewAttributes, "id">;

export interface TblCrewInstance
  extends Model<TblCrewAttributes, TblCrewCreationAttributes>,
    TblCrewAttributes {}

export const tblCrewModle = sequelize.define<TblCrewInstance>(
  "tblCrew",
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
    birthDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    placeOfBirth: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    gendre: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: tblGendre,
        key: "id",
      },
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    occupation: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: tblRole,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);
