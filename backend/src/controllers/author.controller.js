const Service = require("../services/author.service.js");
const author = require("../models/author.model.js");
const authorService = null;

class authorController {
  constructor() {
      this.authorService = new Service();
  }

  save(req, res) {
    if (!req.body) {
        res.send({
            success: false,
            message: "Undefined parameters."
        });
    }

    this.authorService.save(req.body)
      .then( response => {

        if(response.success == false ) {
          res.status(400).send(response);
        } else {
          res.status(201).send({
            success: true,
            message: "Author created with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Author cannot be created. Server Error."
        });
      });
  }

  getAll(req, res) {
     this.authorService.getAll()
     .then( authors => {
        res.status(200).send(authors);
      }).catch( err => {
        res.status(400).send({
          success: false,
          message: "Not found."
        });
      });
  }

  getOne(id, req, res) {
    this.authorService.getOne(id).then(author => {
      res.status(200).send(author);
    }).catch(err => {
      res.status(400).send({
        success: false,
        message: "Not found."
      });
    });
  }

  update(id, req, res) {
    this.authorService.update(id, req.body)
      .then( response => {
        if(response.success == false ) {
          res.status(400).send(response);
        } else  {
          res.status(200).send({
            success: true,
            message: "Author updated with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Author cannot be updated. Server Error."
        });
      });
  }

  delete(id, req, res) {
    this.authorService.delete(id)
    .then(author => {
      res.status(200).send({
        success: true,
        message: "Author deleted with success."
      });
    }).catch(err => {
      res.status(500).send({
        success: false,
        message: "Author cannot be deleted. Server Error."
      });
    });
  }
}

module.exports = authorController;
