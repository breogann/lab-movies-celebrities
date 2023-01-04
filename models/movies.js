const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
    },
    plot: {
      type: String,
    },
    cast: {
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
