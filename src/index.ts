// require('dotenv').config();
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config()

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString ?? '');
const database = mongoose.connection;

database.on('error', (error: any) => {
    console.log(error)
})

database.once('connected', async () => {
    try {
        await mongoose.connection.db.dropDatabase();
        console.log('Dropped all collections');
      } catch (error) {
        console.log(error);
      }
    console.log('Database Connected');

    //here init some data
})

const app = express();

app.use(cors())
app.use(express.json());

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})