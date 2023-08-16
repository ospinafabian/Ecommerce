import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { Client } from '../types/clients.types';

import { getClientByUsername } from '../services/clients.service';

const router = express.Router();

router.post('/login', async (req,res) => {
    const username = req.body.username;

    const serviceLayerResponse = await getClientByUsername(username);

    if (serviceLayerResponse.code === 404){

        res.json (serviceLayerResponse).status(serviceLayerResponse.code);
    } else {
        const user = serviceLayerResponse.result;

        const bcryptComparationResult: boolean = bcrypt.compareSync(req.body.password, (user as Client).password);

        if (username === (user as Client).username && bcryptComparationResult){
            const payload = {username: (user as Client).username};

            const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn:'30d'});

            res.status(200).json({token});
        } else {

            res.status(403).json({message: "Incorrect username or password"});
        }
    }
});

export default router;

