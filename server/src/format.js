require("dotenv").config();
const monk = require("monk");
const db = monk(process.env.MONGO_URI ? process.env.MONGO_URI : "");
const reqs = db.get("reqs");
reqs.drop();
