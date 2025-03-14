import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    kind: String,  // General category (dog, cat, bird, etc.)
    breed: String, // Specific breed
    size: String,  // Small, Medium, Large
    type: String,  // Domestic, Exotic, Farm
    image: String, // URL of the pet's image
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
