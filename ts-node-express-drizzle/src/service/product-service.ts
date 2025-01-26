import { eq, sql } from "drizzle-orm";
import { Product } from "../api/products.js";
import db from "../db/db.js";
import { productTable } from "../db/schema.js";

export const findAll = async (offset: number = 0, limit: number = 5): Promise<Product[]> => {
  return await db().select().from(productTable).offset(offset).limit(limit);
};
