const Experience = require("../models/experience");
const personalinfo = require("../models/experience");

//getALl
class Controller {
  getAll(req, res, next) {
    Experience.find((err, response) => {
      if (err) return next(err);
      res.status(200).json({ data: response });
    });
  }

  //get By Id
  getById(req, res, next) {
    let { id } = req.params;
    Experience.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).json({ success: true, response });
    });
  }

  //add
  post(req, res, next) {
    let body = req.body;
    let doc = new Experience(body);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //edit
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Experience.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  }

  //delete
  delete(req, res, next) {
    let { id } = req.params;
    Experience.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
}

const controller = new Controller();
module.exports = controller;
