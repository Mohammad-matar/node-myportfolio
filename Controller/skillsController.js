const skills = require("../models/skills");

//getAll
class Controller {
  getAll(req, res, next) {
    skills.find((err, response) => {
      if (err) return next(err);
      res.status(200).json({ data: response });
    });
  }
  //get By Id
  getById(req, res, next) {
    let { id } = req.params;
    skills.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).json({ success: true, response });
    });
  }

  //add
  post(req, res, next) {
    let { filename } = req.file;
    let { name } = req.body;
    let body = { name: name, img: filename };

    let doc = new skills(body);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //edit
  put(req, res, next) {
    let { id } = req.params;
    let {name} = req.body;
    let { filename } = req.file || {};
     let data = {name: name, img:filename};
    skills.updateOne(
      { _id: id },
      data,
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  }

  //delete
  delete(req, res, next) {
    let { id } = req.params;
    skills.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
}

const controller = new Controller();
module.exports = controller;