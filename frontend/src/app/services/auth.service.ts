import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/auth';

@Injectable ({
    providedIn: 'root'
})

export class AuthService {
    constructor (private http: HttpClient) { }

    login (loginData: {username: string, password: string}) {
        return this.http.post<{token: string}>(`${API_URL}/login`, loginData
        );
    };

    setToken (token: string) {
        localStorage.setItem ('access_token', token);
    };

    getToken (): string | null {
        return localStorage.getItem('access_token');
    }
}