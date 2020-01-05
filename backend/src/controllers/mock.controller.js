const AuthorMock = require("../mock/author.mock.js");
const PublishingMock = require("../mock/publishing.mock.js");
const BookMock = require("../mock/book.mock.js");

class MockController {
  constructor() {
    this.authorMock = new AuthorMock();
    this.publishingMock = new PublishingMock();
    this.bookMock = new BookMock();
  }

  createMocks(req, res) {
    this.authorMock.createAuthors();
    this.publishingMock.createPublishings();
    this.bookMock.createBooks();

    res.status(201).send({
      success: true,
      message: "Mocks created with success."
    });
  }
}

module.exports = MockController;
