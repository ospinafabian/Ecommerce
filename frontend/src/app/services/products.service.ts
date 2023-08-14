import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../models/products.model';

interface ApiResponse {
    result: Product[]
}

const API_URL = 'http://localhost:3000/products';

@Injectable ({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    getAllProducts () {
        return this.http.get<ApiResponse>(API_URL);
    }

}