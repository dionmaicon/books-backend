const Author = require("../models/author.model.js");

class authorService {
  constructor() {
  }

  async getAll() {
    return await Author.find()
      .then( authors => {
        return authors;
      }).catch(err => {
        return {
          success: false,
          message : err.message
        }
      });
  }

  async getOne(id){
    let error = null;
    let authorResponse = null;

    await Author.findById(id)
      .then( response => {
        authorResponse = response;
      }).catch(err => {
        error = err.message;
      });

      if (error != null) {
        return {
            success: false,
            message: error,
        };
      } else {
        return authorResponse;
      }
  }

  async save(params) {

    let author = new Author(params);
    let error = null;

    await author.save()
      .then( response => {
        author = response;
      }).catch( err => {
        error = err.message;
      });

    if (error != null) {
      return {
          success: false,
          message: error,
      };
    } else {
      return author;
    }
  }

  async update(id, params) {

    let error = null;
    let author = null;

    await Author.findByIdAndUpdate(id, params, {new: true})
      .then(response => {
        author = response;
      }).catch(err => {
        error = err.message;
      });

    if (error != null) {
      return {
          success: false,
          message: error,
      };
    } else {
      return author;
    }

  }

  async delete(id) {
    return await Author.findByIdAndRemove(id)
      .then( author => {
        return author;
      })
      .catch( err => {
        return err;
      });
  }

}

module.exports =  authorService;
