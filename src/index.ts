import express from "express";
import { UrlController } from "./controller/urlController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/shortner", UrlController.shortUrl);

app.listen(3333, () => {
  console.log("app executando na porta 3333");
});
