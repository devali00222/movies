import { Router } from "express";
import { isLogedin } from "../../middlewares/authMiddleware";
import WatchListController from "./watchListController";
const router = Router();

router
  .route("/")
  .get(isLogedin, WatchListController.getAllList)
  .delete(isLogedin, WatchListController.deleteAllList);
router
  .route("/:movieId")
  .post(isLogedin, WatchListController.addToList)
  .delete(isLogedin, WatchListController.deleteFromList);

export default router;
