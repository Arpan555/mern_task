const mongoose = require("mongoose");

const regSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

var regCollect = mongoose.model("regCollect", regSchema);

module.exports = regCollect;
