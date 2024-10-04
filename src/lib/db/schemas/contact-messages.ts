import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactMessages = pgTable("ContactMessages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  was: boolean("was_read").notNull().default(false),
  created_at: timestamp("created_at").notNull().defaultNow(),
});
