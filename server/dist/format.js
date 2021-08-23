"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const monk_1 = __importDefault(require("monk"));
const db = monk_1.default(process.env.MONGO_URI ? process.env.MONGO_URI : "");
const reqs = db.get("reqs");
reqs.drop();
