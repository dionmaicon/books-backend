const express = require('express');
const router = express.Router();
const Controller = require("../controllers/author.controller.js");
const authorController = new Controller();

router.get('/', (req, res) => {
  authorController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  authorController.getOne(id, req, res);
});

router.post('/',(req, res) => {
  authorController.save(req, res);
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  authorController.update(id, req, res);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  authorController.delete(id, req, res);
});

module.exports = router;
