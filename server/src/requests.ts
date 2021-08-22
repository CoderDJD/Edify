import dotenv from "dotenv";
dotenv.config();
import express, { Router } from "express";
import monk from "monk";

const db = monk(process.env.MONGO_URI);
const app = express.Router();

app.get("/", (_, res) => {});

export default Router;
