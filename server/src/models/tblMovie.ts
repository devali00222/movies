import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";
import { tblCrewModle } from "./tblCrew";
import { tblGenre } from "./tblgenre";

interface TblMovieAttributes {
  id: number;
  title: string;
  releaseDate: Date;
  genre: number | null;
  plotSummary: string | null;
  runtime: number | null;
  language: string | null;
  director: number | null;
  rating: number | null;
}

type TblMovieCreationAttributes = Optional<TblMovieAttributes, "id">;

export interface TblMovieInstance
  extends Model<TblMovieAttributes, TblMovieCreationAttributes>,
    TblMovieAttributes {}

export const tblMovieModel = sequelize.define<TblMovieInstance>(
  "tblMovie",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    genre: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references : {
        model: tblGenre,
        key: "id"
      }
    },
    plotSummary: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    director: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references:{
        model:tblCrewModle,
        key: "id"
      }
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);
