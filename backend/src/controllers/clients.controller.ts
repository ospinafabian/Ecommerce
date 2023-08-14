import express from 'express';

import { postClient } from '../services/clients.service';

import { CustomErrorFormat } from '../types/api.types'

const router = express.Router();


router.post('', async function(req, res) {
    try {
      const body = req.body;

      const serviceLayerResponse = await postClient(body);

      res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);

    } catch (error) {
      const customError = error as CustomErrorFormat;
      console.log(customError.errorMessage);
      res.status(customError.code ).json(customError.message );
    }
  });

  export default router;