// Create the celebrity schema with the properties name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model.

const mongoose = require("mongoose");

const Celebrity = mongoose.model("Celebrity", {
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
  },
  timestamps: true,
});

const celebritySchema = new mongoose.Schema({ Celebrity });

module.exports = celebritySchema;
