import { integer, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const productTable = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  type: varchar("category", { length: 50 }).notNull(),
});
