import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { schema } from "./shcemas";

export const db = drizzle(sql, { schema });
