import express from 'express';

import productsControllers from './products.controller';

function routerApi (app: express.Application){
    app.use('/products', productsControllers);
}

export { routerApi }