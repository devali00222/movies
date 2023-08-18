import { Router } from "express";
import { Validate } from "../../middlewares/validator";
import DirectorController from "./directoresController";
import { Schema } from "./directorsValidator";
const router = Router();

router
  .route("/")
  .get(DirectorController.getAllDirectors)
  .post(
    Validate.validateShcema(Schema.Directors.create),
    DirectorController.postDirector
  );
router
  .route("/:directorId")
  .get(Validate.validateId, DirectorController.getOneDirector)
  .put(
    Validate.validateId,
    Validate.validateShcema(Schema.Directors.update),
    DirectorController.updateDirector
  )
  .delete(Validate.validateId, DirectorController.deleteDirector);

export default router;
