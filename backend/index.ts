import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import  {routerApi } from './src/controllers/routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://fabianospina0917:123456Abc@ecommerce.1eacfy4.mongodb.net/')
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