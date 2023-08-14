import { Client } from '../types/clients.types';

import { createCLient } from '../data/clients.data';

import { ServiceLayerResponse } from "../types/api.types";


export const postClient = (body: Client): Promise <ServiceLayerResponse<Client>> => {
    return new Promise ((resolve,reject) => {
        createCLient(body)
          .then((dataLayerResponse) => {
            resolve ({code:201, message: dataLayerResponse as string});
          })
          .catch (error => {
            reject ({code:500, message: "Unexpected Error", errorMessage: error});
          });
    });
};