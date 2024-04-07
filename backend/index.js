import {PORT, mongoDBUrl} from "./config.js";
import mongoose from "mongoose";
import express from "express";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for handling CORS Policy
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
// app.use(cors({
//     origins: 'https://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     })
// )

app.use(express.json());

app.get('/', (request, response) => {
        console.log(request);
        return response.status(234).send('Welcome to the jungle.');
    }
);

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBUrl)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
        console.log('App connected to database');
    })
    .catch((onerror) => {
        console.log(onerror);
    });

