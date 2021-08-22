"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const requests_1 = __importDefault(require("./requests"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(helmet_1.default());
app.use("/reqs", requests_1.default);
app.get("/", (_, res) => {
    res.json({ message: "Hello World 🌎!" });
});
app.listen(process.env.PORT, () => console.log("server running on http://localhost:" + process.env.PORT));
