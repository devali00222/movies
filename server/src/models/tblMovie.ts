import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/sequelize";
import { tbldirector } from "./tbldirector";
import { tblgenre } from "./tblgenre";
import { tblqualifier } from "./tblqualifier";

interface TblMovieAttributes {
  id: number;
  title: string;
  rating: number | null;
  imdbVotes: number | null;
  year: number | null;
  genreId: number | null;
  directorId: number | null;
  imdb: number | null;
  qualifierId: number | null;
}

type TblMovieCreationAttributes = Optional<TblMovieAttributes, "id">;

export interface TblMovieInstance
  extends Model<TblMovieAttributes, TblMovieCreationAttributes>,
    TblMovieAttributes {}

export const tblMovieModel = sequelize.define<TblMovieInstance>(
  "tblmovie",
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
    genreId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "tblgenre",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    directorId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "tbldirector",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    imdb: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true,
    },
    qualifierId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: "tblqualifier",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    freezeTableName: true,
  }
);
