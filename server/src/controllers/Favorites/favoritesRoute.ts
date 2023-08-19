import { Router } from "express";
import { isLogedin } from "../../middlewares/authMiddleware";
import FavoritesController from "./favoritesController";
const router = Router();

router
  .route("/")
  .get(isLogedin, FavoritesController.getAllFavorites)
  .delete(isLogedin, FavoritesController.deleteAllFavorites);
router
  .route("/:movieId")
  .post(isLogedin, FavoritesController.addFavorite)
  .delete(isLogedin, FavoritesController.deleteFavorite);

export default router;
