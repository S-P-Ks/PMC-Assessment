import db from "./db.js";
import { productTable } from "./schema.js";

export const productSeedData = [
  { name: "Laptop Pro", type: "Electronics" },
  { name: "Wireless Mouse", type: "Electronics" },
  { name: "4K Monitor", type: "Electronics" },
  { name: "Mechanical Keyboard", type: "Electronics" },
  { name: "Noise Cancelling Headphones", type: "Electronics" },
  { name: "Running Shoes", type: "Sportswear" },
  { name: "Training Shorts", type: "Sportswear" },
  { name: "Basketball", type: "Sportswear" },
  { name: "Fitness Tracker", type: "Sportswear" },
  { name: "Yoga Mat", type: "Sportswear" },
  { name: "Coffee Maker", type: "Kitchen Appliances" },
  { name: "Blender", type: "Kitchen Appliances" },
  { name: "Air Fryer", type: "Kitchen Appliances" },
  { name: "Electric Kettle", type: "Kitchen Appliances" },
  { name: "Food Processor", type: "Kitchen Appliances" },
];

async function seedProducts() {
  await db().insert(productTable).values(productSeedData);
  console.log("Products seeded successfully");
}

// Call the function when needed
seedProducts().catch(console.error);
