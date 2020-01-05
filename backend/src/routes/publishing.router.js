const express = require('express');
const router = express.Router();
const Controller = require("../controllers/publishing.controller.js");
const publishingController = new Controller();

router.get('/', (req, res) => {
  publishingController.getAll(req, res);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  publishingController.getOne(id, req, res);
});

router.post('/', (req, res) => {
  publishingController.save(req, res);
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  publishingController.update(id, req, res);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  publishingController.delete(id, req, res);
});

module.exports = router;
