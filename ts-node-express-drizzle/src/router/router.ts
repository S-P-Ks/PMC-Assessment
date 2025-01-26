import { Router } from "express";
import * as ProductController from "../controller/product-controller.js";

const router = Router();
router.get("/products", ProductController.getAll);

export default router;
