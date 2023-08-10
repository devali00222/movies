import { Router } from "express";
import MovieController from "../controllers/moviesController";
import { Schema } from "../utils/validateSchemas";
import { Validate } from "../middlewares/validator";
const router = Router();

router
  .route("/")
  .get(MovieController.getAllMovies)
  .post(
    Validate.validateShcema(Schema.Movies.create),
    MovieController.postMovie
  );
router
  .route("/:movieId")
  .get(Validate.validateId, MovieController.getOneMovie)
  .put(
    Validate.validateId,
    Validate.validateShcema(Schema.Movies.update),
    MovieController.updateMovie
  )
  .delete(Validate.validateId, MovieController.deleteMovie);

export default router;
