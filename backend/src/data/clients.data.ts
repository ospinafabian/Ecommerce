import { Client } from "../types/clients.types";

import { ClientSchema } from "../schemas/clients.schema";

export const readClientById = (id: string) => {
    return new Promise (async (resolve,reject) => {
        try {
            const mongoResponse = await ClientSchema.findById(id);

            if (mongoResponse === null){
                reject (404);
            } else {
                resolve (mongoResponse);
            }
        } catch (error) {
            reject (error);
        }
    });
};

export const createCLient = (body: Client) => {
    return new Promise ( async (resolve,reject) => {
        try {
            const client = new ClientSchema(body);

            await client.save();

            resolve ('A client profile has been created')
        } catch (error) {
            reject  (error);
        }
    });
};