// Create the celebrity schema with the properties name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model.

const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    occupation: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Celebrity", celebritySchema);
