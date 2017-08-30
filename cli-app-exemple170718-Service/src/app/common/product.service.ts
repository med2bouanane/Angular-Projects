import { Config } from './config';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService implements OnInit{
    constructor(private http: Http) { }
    
    ngOnInit() {
    }

    getProducts(){
        let token = localStorage.getItem('id_token')
        let hedears = new Headers()
        hedears.append('Authorization','Bearer '+token)
        return this.http.get(Config.URL+'/products',{headers:hedears})
                        .map(res => res.json())
    }
}