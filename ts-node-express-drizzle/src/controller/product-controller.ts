import { Request, Response } from 'express';
import { findAll } from '../service/product-service.ts';

export const getAll = async (req: Request, res: Response) => {
  const { offset, limit } = req.body;
  
  const products = await findAll(offset, limit);
  res.status(200).json(products);
};
