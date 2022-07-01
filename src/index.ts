import express from "express";
import { UrlController } from "./controller/urlController";
import { DBconection } from "./dataBase/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBconection.Conection();

app.post("/shortner", UrlController.shortUrl);
app.get("/:hash", UrlController.Redirect);

app.listen(3333, () => {
  console.log("app executando na porta 3333");
});
