"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const constrants_1 = require("../config/constrants");
class UrlController {
    static async shortUrl(req, res) {
        const { originalUrl } = req.body;
        const hash = shortid_1.default.generate();
        const shortner = `${constrants_1.Config.API_URL}/${hash}`;
        res.json({ hash, originalUrl, shortner });
    }
}
exports.UrlController = UrlController;
