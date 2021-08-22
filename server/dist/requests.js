"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const monk_1 = __importDefault(require("monk"));
const bad_words_1 = __importDefault(require("bad-words"));
const router = express_1.default.Router();
const db = monk_1.default(process.env.MONGO_URI ? process.env.MONGO_URI : "");
const reqs = db.get("reqs");
const filter = new bad_words_1.default();
router.get("/", (_req, res) => {
    reqs
        .find({})
        .then((reqs) => res.json({ data: reqs, err: null }))
        .catch((err) => res.json({ data: null, err: err }));
});
router.post("/", (req, res) => {
    reqs
        .insert({
        name: filter.clean(req.body.name),
        grade: filter.clean(req.body.grade),
        perc: filter.clean(req.body.perc),
        mail: filter.clean(req.body.mail),
        phone: filter.clean(req.body.phone),
        school: filter.clean(req.body.school),
        smail: filter.clean(req.body.smail),
        sphone: filter.clean(req.body.sphone),
    })
        .then((creq) => res.json(creq))
        .catch((err) => res.json(err));
});
exports.default = router;
