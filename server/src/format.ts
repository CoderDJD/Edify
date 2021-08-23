import dotenv from "dotenv";
dotenv.config();
import monk from "monk";
const db = monk(process.env.MONGO_URI ? process.env.MONGO_URI : "");
const reqs = db.get("reqs");
reqs.drop();
