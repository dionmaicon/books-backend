const Service = require("../services/publishing.service.js");
const Publishing = require("../models/publishing.model.js");
const publishingService = null;

class PublishingController {
  constructor() {
      this.publishingService = new Service();
  }

  save(req, res) {
    if (!req.body) {
        res.send({
            success: false,
            message:  "Undefined parameters."
        });
    }

    this.publishingService.save(req.body)
      .then( response => {
        if(response.success == false ) {
          res.status(400).send(response);
        } else {
          res.status(201).send({
            success: true,
            message: "Publishing created with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "The Publishing cannot be created."
        });
      });
  }

  getAll(req, res) {
     this.publishingService.getAll()
     .then( publishings => {
        res.status(200).send(publishings);
      }).catch( err => {
        res.status(400).send({
          success: false,
          message: "Not found."
        });
      });
  }

  getOne(id, req, res) {
    this.publishingService.getOne(id).then(publishing => {
      res.status(200).send(publishing);
    }).catch(err => {
      res.status(400).send({
        success: false,
        message: "Not found."
      });
    });
  }

  update(id, req, res) {
    this.publishingService.update(id, req.body)
      .then( response => {
        if(response.success == false ) {
          res.status(400).send(response);
        } else  {
          res.status(200).send({
            success: true,
            message: "Publishing updated with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Publishing cannot be updated."
        });
      });
  }

  delete(id, req, res) {
    this.publishingService.delete(id)
    .then(publishing => {
      res.status(200).send({
        success: true,
        message: "Publishing deleted wit success."
      });
    }).catch(err => {
      res.status(500).send({
        success: false,
        message: "Publishing cannot be deleted."
      });
    });
  }
}

module.exports = PublishingController;
