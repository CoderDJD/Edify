import dotenv from "dotenv";
dotenv.config();
import express from "express";
import monk from "monk";
import Filter from "bad-words";

const router = express.Router();

const db = monk(process.env.MONGO_URI ? process.env.MONGO_URI : "");
const reqs = db.get("reqs");
const filter = new Filter();

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

export default router;
