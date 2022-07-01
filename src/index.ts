import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use();

app.listen(3333, () => {
  console.log("app executando na porta 3333");
});
