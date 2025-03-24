import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'furvana'
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Pet = mongoose.model('petsCollection', new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  image: String,
  description: String
}));

const seedPets = async () => {
  await Pet.insertMany([
    { name: 'Buddy', age: 3, breed: 'Golden Retriever', image: 'https://placedog.net/400/200', description: 'Friendly and loving.' },
    { name: 'Max', age: 2, breed: 'Labrador', image: 'https://placedog.net/450/220', description: 'Loyal and playful.' },
    { name: 'Bella', age: 4, breed: 'Beagle', image: 'https://placedog.net/500/250', description: 'Curious and energetic.' }
  ]);
  console.log('Pets added');
  mongoose.connection.close();
};

seedPets();
