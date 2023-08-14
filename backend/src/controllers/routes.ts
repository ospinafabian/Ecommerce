import express from 'express';

import productsControllers from './products.controller';
import clientsControllers from './clients.controller';

function routerApi (app: express.Application){
    app.use('/products', productsControllers);
    app.use('/clients', clientsControllers);
}

export { routerApi }