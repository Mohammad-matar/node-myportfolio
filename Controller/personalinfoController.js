const personalinfo = require("../models/personalinfo");

//getALl
class Controller {
  getAll(req, res, next) {
    personalinfo.find((err, response) => {
      if (err) return next(err);
      res.status(200).json({ data: response });
    });
  }

  //get By Id
  getById(req, res, next) {
    let { id } = req.params;
    personalinfo.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).json({ success: true, response });
    });
  }

  //add
  post(req, res, next) {
    let { filename } = req.file;
    let { name, description } = req.body;
    let body = { name: name, description: description, img: filename };

    let doc = new personalinfo(body);
    doc.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //edit
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    personalinfo.updateOne(
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
    personalinfo.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }
}

const controller = new Controller();
module.exports = controller;