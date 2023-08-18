import { Router } from "express";
import { Validate } from "../../middlewares/validator";
import GenreController from "./genresController";
import { Schema } from "./genresValidator";
const router = Router();

router
  .route("/")
  .get(GenreController.getAllgenres)
  .post(
    Validate.validateShcema(Schema.Genres.create),
    GenreController.postGenre
  );
router
  .route("/:genreId")
  .get(Validate.validateId, GenreController.getOneGenre)
  .put(
    Validate.validateId,
    Validate.validateShcema(Schema.Genres.update),
    GenreController.updateGenre
  )
  .delete(Validate.validateId, GenreController.deleteGenre);

export default router;
