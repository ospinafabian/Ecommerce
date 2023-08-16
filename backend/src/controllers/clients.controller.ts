import express from 'express';

import { getClientById, postClient } from '../services/clients.service';

import { CustomErrorFormat } from '../types/api.types'
import { authenticateToken } from '../middlewares/jwt-validation';

const router = express.Router();

router.get('/:id', authenticateToken, async (req,res) =>{

  try {
    const id = req.params.id;

    const serviceLayerResponse = await getClientById(id);
    res.status(serviceLayerResponse.code).json(serviceLayerResponse.result);

  }catch (error) {
    const customError = error as CustomErrorFormat;
    console.log(customError.errorMessage)
    res.status(customError.code).json(customError.message);
  }
});


router.post('/register', async function(req, res) {
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