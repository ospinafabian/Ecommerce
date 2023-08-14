import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';

import  {routerApi } from './src/controllers/routes';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL as string)
    .then( () => {
        console.log("Database connected");
    })
    .catch (() => {
            console.log("Mongo connection failed");
        });

routerApi(app);

app.listen(port, function () {
    console.log('API executing on: http://localhost:' + port);
});