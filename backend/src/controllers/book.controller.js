const Service = require("../services/book.service.js");
const Book = require("../models/book.model.js");
const bookService = null;

class BookController {
  constructor() {
      this.bookService = new Service();
  }

  save(req, res) {
    if (!req.body) {
        res.send({
            success: false,
            message: "Undefined parameters."
        });
    }

    this.bookService.save(req.body)
      .then( response => {
        if(response.success == false ) {
          res.status(400).send(response);
        } else {
          res.status(201).send({
            success: true,
            message: "Book created with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Book cannot be created. Server Error."
        });
      });
  }

  getAll(req, res) {
     this.bookService.getAll()
     .then( books => {
        res.status(200).send(books);
      }).catch( err => {
        res.status(400).send({
          success: false,
          message: "Not found."
        });
      });
  }

  getOne(id, req, res) {
    this.bookService.getOne(id).then(book => {
      res.status(200).send(book);
    }).catch(err => {
      res.status(400).send({
        success: false,
        message: "Not found."
      });
    });
  }

  update(id, req, res) {
    this.bookService.update(id, req.body)
      .then( response => {
        if(response.success == false ) {
          res.status(400).send(response);
        } else  {
          res.status(200).send({
            success: true,
            message: "Book updated with success."
          });
        }
      }).catch(err => {
        res.status(500).send({
          success: false,
          message: "Book cannot be updated. Server Error."
        });
      });
  }

  delete(id, req, res) {
    this.bookService.delete(id)
    .then(book => {
      res.status(200).send({
        success: true,
        message: "Book deleted with success."
      });
    }).catch(err => {
      res.status(500).send({
        success: false,
        message: "Book cannot to be deleted."
      });
    });
  }
}

module.exports = BookController;
