import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;
const app = express();
app.use(cors());

mongoose.set('strictQuery', true);

await mongoose.connect('mongodb+srv://sanjay:Sanju123@invoice.ybzq3j3.mongodb.net/?retryWrites=true&w=majority').then(() => console.log("mongoDb connected!!")).catch((err) => console.error(err));
app.get('/', (req, res) => {
    res.send("Hello world to express from app.get res.send");
});

app.listen(PORT, () => {
    console.log("server running @ http://localhost:4000");
});