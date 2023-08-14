import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Client } from '../models/clients.model';

const API_URL = 'http://localhost:3000/clients';

@Injectable ({
    providedIn: 'root'
})

export class ClientService {

    constructor(private http: HttpClient) { }

    registerClient (body: Client){

        return this.http.post<string>(`${API_URL}/register`,body);
    };

    getClientById (id:string) {
        return this.http.get<Client>(`${API_URL}/${id}`);
    }
}