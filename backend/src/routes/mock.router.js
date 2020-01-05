const express = require("express");
const router = express.Router();
const Controller = require("../controllers/mock.controller.js");
const mockController = new Controller();

router.get('/', function(req, res) {
  mockController.createMocks(req, res);
});

module.exports = router;
