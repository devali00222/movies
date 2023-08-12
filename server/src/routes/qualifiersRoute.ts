import { Router } from "express";
import QualifiersController from "../controllers/qualifiersController";
import { Validate } from "../middlewares/validator";
import { Schema } from "../utils/validateSchemas";

const router = Router();
router
  .route("/")
  .get(QualifiersController.getAllQualifiers)
  .post(
    Validate.validateShcema(Schema.Qualifiers.create),
    QualifiersController.postQualifier
  );
router
  .route("/:qualifierId")
  .get(Validate.validateId, QualifiersController.getOneQualifier)
  .put(
    Validate.validateId,
    Validate.validateShcema(Schema.Qualifiers.update),
    QualifiersController.updateQualifier
  )
  .delete(Validate.validateId, QualifiersController.deleteQualifier);
export default router