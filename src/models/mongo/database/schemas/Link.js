const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema(
  {
    destinationLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Links', LinkSchema);