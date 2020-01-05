const Author = require("../models/author.model.js");
var faker = require('faker');

class AuthorMock {
  constructor() {

  }

  createAuthors() {
    for (var i = 0; i < 10; i++) {
      let author = new Author(
      {
          "name": faker.name.findName(),
          "birth": faker.date.past(Math.floor(Math.random() * 70) + 18),
          "active": faker.random.boolean(),
          "sponsor": "Patreon"
      });

      author.save().then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
    }
  }

}

module.exports = AuthorMock;
