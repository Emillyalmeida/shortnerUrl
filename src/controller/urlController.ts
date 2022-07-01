import { Request, Response } from "express";
import shortid from "shortid";
import { Config } from "../config/constrants";

export class UrlController {
  static async shortUrl(req: Request, res: Response) {
    const { originalUrl } = req.body;
    const hash = shortid.generate();
    const shortner = `${Config.API_URL}/${hash}`;
    res.json({ hash, originalUrl, shortner });
  }
}
