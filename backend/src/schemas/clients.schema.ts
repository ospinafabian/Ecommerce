import mongoose from "mongoose";

import { Client } from "../types/clients.types";

const clientSchema = new mongoose.Schema<Client>({

    username: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: String, required: true },
    password: { type: String, required: true },

});

export const ClientSchema = mongoose.model ("Clients", clientSchema);