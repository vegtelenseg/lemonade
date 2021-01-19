import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  password: "postgres",
  database: "challenge",
});
