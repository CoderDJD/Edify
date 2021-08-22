import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";
import reqs from "./requests";
import morgan from "morgan";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use("/reqs", reqs);

app.get("/", (_, res) => {
  res.json({ message: "Hello World 🌎!" });
});

app.listen(process.env.PORT, () =>
  console.log("server running on http://localhost:" + process.env.PORT)
);
