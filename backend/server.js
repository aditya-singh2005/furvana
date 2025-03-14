import express from "express";
import connectDB from "./db.js";
import Pet from "./models/petModel.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
