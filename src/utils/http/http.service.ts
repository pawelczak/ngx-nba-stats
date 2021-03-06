import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

    constructor(private http: Http) {}

    get(args: any) {
        return this.http.get(args);
    }

}
