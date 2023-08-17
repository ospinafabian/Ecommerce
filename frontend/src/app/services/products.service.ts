import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../models/products.model';

import {map} from 'rxjs/operators';


interface ApiResponse {
    result: Product[]
}

const API_URL = 'http://localhost:3000/products';

@Injectable ({
    providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts () {
        return this.http.get<ApiResponse>(API_URL).pipe(map((res:any) => {
            return res;
        }));
    }

}