import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.get("/", (_, res) => {
  res.json({ message: "Hello World 🌎!" });
});

app.listen(process.env.PORT, () =>
  console.log("server running on http://localhost:" + process.env.PORT)
);
