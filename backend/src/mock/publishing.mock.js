const Publishing = require("../models/publishing.model.js");
var faker = require('faker');

class PublishingMock {
  constructor() {

  }

  createPublishings() {
    for (var i = 0; i < 10; i++) {
      let publishing = new Publishing(
      {
          "name": faker.name.findName(),
      });

      publishing.save().then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
    }
  }

}

module.exports = PublishingMock;
