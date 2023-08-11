import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";
import { tblDirector } from "./tblDirector";
import { tblGenre } from "./tblgenre";
import { tblQualifier } from "./tblQualifier";

interface TblMovieAttributes {
  id: number;
  title: string;
  rating: number | null;
  imdbVotes: number | null;
  year: number | null;
  genre: number | null;
  director: number | null;
  imdb: number | null;
  qualifier: number | null;
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
    rating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
    imdbVotes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    genre: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: tblGenre,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    director: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: tblDirector,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    imdb: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },
    qualifier: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: tblQualifier,
        key: "id",
      },
      onDelete: "SET NULL",
    },
  },
  {
    freezeTableName: true,
  }
);
