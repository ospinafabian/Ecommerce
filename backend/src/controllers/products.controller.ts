import express from 'express';

import{
    getProducts,
    getProductsbyName,
    postProduct,
    putProduct,
    deleteProduct
} from '../services/products.service';

const router = express.Router();

interface CustomErrorFormat {
    code: number,
    message: string,
    errorMessage: unknown
}

router.get('',async (req,res) => {
    try{
        const serviceLayerResponse = await getProducts();
        res.status(serviceLayerResponse.code).json({result: serviceLayerResponse.result});
    } catch(error){
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.get('/name/:name',async (req,res) => {
    try {
        const name = req.params.name;
        const serviceLayerResponse = await getProductsbyName(name);

        res.status(serviceLayerResponse.code).json(serviceLayerResponse.result);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.post('/newProduct', async (req,res) => {
    try {
        const body = req.body;
        const serviceLayerResponse = await postProduct(body);

        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log(customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.put('/id/:id', async function (req,res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const serviceLayerResponse = await putProduct(id, body);

        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log (customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
});

router.delete('/id/:id', async function (req,res) {
    try {
        const id = req.params.id;
        const serviceLayerResponse = await deleteProduct(id);
        res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
        const customError = error as CustomErrorFormat;
        console.log (customError.errorMessage);
        res.status(customError.code).json(customError.message);
    }
})

export default router;