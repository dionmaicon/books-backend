const mongoose = require('mongoose');
require('mongoose-long')(mongoose);

const PublishingSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    }
}, {
    timestamps: true
});

PublishingSchema.set('collection', 'publishings');

PublishingSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});

module.exports = mongoose.model('Publishing', PublishingSchema, 'publishings');
