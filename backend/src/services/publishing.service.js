const publishing = require("../models/publishing.model.js");

class publishingService {
  constructor() {
  }

  async getAll() {
    return await publishing.find()
      .then( publishings => {
        return publishings;
      }).catch(err => {
        return {
          success: false,
          message : err.message
        }
      });
  }

  async getOne(id){
    let error = null;
    let publishingResponse = null;

    await publishing.findById(id)
      .then( response => {
        publishingResponse = response;
      }).catch(err => {
        error = err.message;
      });

      if (error != null) {
        return {
            success: false,
            message: error,
        };
      } else {
        return publishingResponse;
      }
  }

  async save(params) {
    let publishing = new publishing(params);
    let error = null;

    await publishing.save()
      .then( response => {
        publishing = response;
      }).catch( err => {
        error = err.message;
      });

    if (error != null) {
      return {
          success: false,
          message: error,
      };
    } else {
      return publishing;
    }
  }

  async update(id, params) {

    let error = null;
    let publishing = null;

    await publishing.findByIdAndUpdate(id, params, {new: true})
      .then(response => {
        publishing = response;
      }).catch(err => {
        error = err.message;
      });

    if (error != null) {
      return {
          success: false,
          message: error,
      };
    } else {
      return publishing;
    }

  }

  async delete(id) {
    return await publishing.findByIdAndRemove(id)
      .then( publishing => {
        return publishing;
      })
      .catch( err => {
        return err;
      });
  }

}

module.exports =  publishingService;
