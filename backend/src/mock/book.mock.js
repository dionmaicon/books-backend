const Book = require("../models/book.model.js");
var faker = require('faker');

const ISBN = [
  '9789446125447',
  '9789446125447',
  '9789446125447',
  '9789446125447',
  '9789446125447',
  '9789446125447',
  '9789446125447',
];

class BookMock {
  constructor() {

  }

  createBooks() {
    for (var i = 0; i < ISBN.length; i++) {
      let book = new Book(
      {
          "title": faker.name.title(),
          "ISBN": ISBN[i],
          "authors": [],
          "publishing": {},
          "year": Number(2016) + Number(i),
          "price": Number(9.99),
      });

      book.save().then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
    }
  }

}

module.exports = BookMock;
