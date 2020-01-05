const express = require('express');
const router = express.Router();
const Controller = require("../controllers/book.controller.js");
const bookController = new Controller();

router.get('/', (req, res) => {
  bookController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  bookController.getOne(id, req, res);
});

router.post('/', (req, res) => {
  bookController.save(req, res);
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  bookController.update(id, req, res);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  bookController.delete(id, req, res);
});

module.exports = router;
