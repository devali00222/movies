import { Router } from "express";
import MovieController from "./moviesController";
import { Schema } from "./moviesValidator";
import { Validate } from "../../middlewares/validator";
import { isLogedin } from "../../middlewares/authMiddleware";

const router = Router();

router
  .route("/")
  .get(MovieController.getAllMovies)
  .post(isLogedin,
    Validate.validateShcema(Schema.Movies.create),
    MovieController.postMovie
  );
router
  .route("/:movieId")
  .get(Validate.validateId, MovieController.getOneMovie)
  .put(
    isLogedin,
    Validate.validateId,
    Validate.validateShcema(Schema.Movies.update),
    MovieController.updateMovie
  )
  .delete(isLogedin,Validate.validateId, MovieController.deleteMovie);

export default router;
