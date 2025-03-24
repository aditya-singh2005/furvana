const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true, minlength: 2, maxlength: 50 },
    age: { type: Number, required: true, min: 0, max: 30 },
    petType: { type: String, trim: true, required: true, minlength: 3, maxlength: 20 },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    breed: { type: String, trim: true, required: true, minlength: 3, maxlength: 30 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);
