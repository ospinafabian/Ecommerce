import { Client } from '../types/clients.types';

import { readClientById,readClientByEmail, createCLient } from '../data/clients.data';
import bcryptjs from 'bcryptjs';
import { ServiceLayerResponse } from "../types/api.types";



export const getClientById = (id: string): Promise<ServiceLayerResponse<Client>> => {
  return new Promise((resolve, reject) => {
    readClientById(id)
      .then((dataLayerResponse) => {

        if((dataLayerResponse as Client[]).length === 0){

          resolve({ code: 404 , message: 'Inexistent Client' });

        }else{
          resolve({ code: 200, result: dataLayerResponse as Client });

        }
      })
      .catch(error => {
        reject({code: 500, message: "Unexpected Error", errorMessage: error});

      });
  });
};

export const getClientByEmail = (email: string): Promise<ServiceLayerResponse<Client>> => {
  return new Promise((resolve, reject) => {
    readClientByEmail(email)
      .then((dataLayerResponse) => {

        if((dataLayerResponse as Client[]).length === 0){

          resolve({ code: 404 , message: 'Inexistent Client' });

        }else {
          resolve({ code: 200, result: dataLayerResponse[0] as Client });
        }
      })
      .catch (error => {
        reject({code: 500, message: "Unexpected Error", errorMessage: error});

      });
  });
};



export const postClient = (body: Client): Promise <ServiceLayerResponse<Client>> => {
    return new Promise (async (resolve,reject) => {
      const hashedPassword = await bcryptjs.hash(body.password, 10);
      body.password = hashedPassword;

        createCLient(body)
          .then((dataLayerResponse) => {
            resolve ({code:201, message: dataLayerResponse as string});
          })
          .catch (error => {
            reject ({code:500, message: "Unexpected Error", errorMessage: error});
          });
    });
};