import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'your-mongodb-uri-here';

mongoose.connect(MONGO_URI, {
  dbName: 'furvana' // Ensure the correct database is used
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define Pet Schema
const petSchema = new mongoose.Schema({
  name: String,
  petType: String,
  age: Number,
  breed: String,
  gender: String,
  description: String,
  width: Number,
  height: Number,
  image: String
});

const Pet = mongoose.model('petsCollection', petSchema); // Using `petsCollection`

// API Routes
app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/pets', async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
