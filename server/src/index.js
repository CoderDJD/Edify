require("dotenv").config();
const Joi = require("joi");
const monk = require("monk");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const Filter = require("bad-words");
const rateLimit = require("express-rate-limit");

const app = express(),
  customJoi = Joi.extend(require("joi-phone-number")),
  db = monk(process.env.MONGO_URI ? process.env.MONGO_URI : ""),
  reqs = db.get("reqs"),
  filter = new Filter(),
  schema = Joi.object({
    name: customJoi
      .string()
      .required()
      .min(3)
      .max(30)
      .regex(/^[a-zA-Z0-9 ]*$/),
    grade: customJoi
      .string()
      .required()
      .max(30)
      .regex(/^[a-zA-Z0-9 ]*$/),
    perc: customJoi.string().alphanum().required().max(10),
    mail: customJoi.string().email().required(),
    phone: customJoi.string().phoneNumber().required(),
    school: customJoi
      .string()
      .required()
      .regex(/^[a-zA-Z0-9 ]*$/),
    smail: customJoi.string().email().required(),
    sphone: customJoi.string().phoneNumber().required(),
  });

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 30 * 1000,
    max: 10,
  })
);

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
  if (error) res.json({ err: error, data: null });
  else {
    console.log(tempOpbject);
    reqs
      .insert(tempOpbject)
      .then((creq) => res.json({ data: creq, err: null }))
      .catch((err) => res.json({ err: new Error(err.toString()), data: null }));
  }
});

app.listen(8080, () => console.log("server running on http://localhost:8080"));
