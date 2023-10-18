import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTs videos`.then(() => {
//   console.log("tabela eliminada com sucesso");
// });

sql`
CREATE TABLE videos (
  id           TEXT PRIMARY KEY,
  title        TEXT,
  description  TEXT,
  duration     INTEGER
);
`.then(() => {
  console.log("tabela criada");
});
