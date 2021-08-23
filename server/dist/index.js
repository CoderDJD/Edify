"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const joi_1 = __importDefault(require("joi"));
const monk_1 = __importDefault(require("monk"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const bad_words_1 = __importDefault(require("bad-words"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const app = express_1.default(), customJoi = joi_1.default.extend(require("joi-phone-number")), db = monk_1.default(process.env.MONGO_URI ? process.env.MONGO_URI : ""), reqs = db.get("reqs"), filter = new bad_words_1.default(), schema = joi_1.default.object({
    name: customJoi.string().required().min(3).max(30),
    grade: customJoi.string().required().max(30),
    perc: customJoi.string().alphanum().required().max(10),
    mail: customJoi.string().email().required(),
    phone: customJoi.string().phoneNumber().required(),
    school: customJoi.string().required(),
    smail: customJoi.string().email().required(),
    sphone: customJoi.string().phoneNumber().required(),
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(helmet_1.default());
app.use(express_rate_limit_1.default({
    windowMs: 30 * 1000,
    max: 10,
}));
app.get("/reqs", (_req, res) => {
    reqs
        .find({})
        .then((reqs) => res.json({ data: reqs, err: null }))
        .catch((err) => res.json({ data: null, err: err }));
});
app.post("/reqs", (req, res) => {
    let tempOpbject = {
        name: filter.clean(req.body.name),
        grade: filter.clean(req.body.grade),
        perc: filter.clean(req.body.perc),
        mail: filter.clean(req.body.mail),
        phone: filter.clean(req.body.phone),
        school: filter.clean(req.body.school),
        smail: filter.clean(req.body.smail),
        sphone: filter.clean(req.body.sphone),
    };
    const { error } = schema.validate(tempOpbject);
    if (error)
        res.json({ err: error, data: null });
    else {
        console.log(tempOpbject);
        reqs
            .insert(tempOpbject)
            .then((creq) => res.json({ data: creq, err: null }))
            .catch((err) => res.json({ err: new Error(err.toString()), data: null }));
    }
});
app.listen(8080, () => console.log("server running on http://localhost:8080"));
