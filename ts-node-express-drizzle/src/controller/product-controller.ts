import { Request, Response } from "express";
import { findAll } from "../service/product-service.js";

export const getAll = async (req: Request, res: Response) => {
  const products = await findAll();
  res.status(200).json(products);
};
