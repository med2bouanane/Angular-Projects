import { Config } from './config';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService implements OnInit{
    constructor(private http: Http, private router:Router) { }
    /**
     * Los Subjects son Observables que además pueden manejar múltiples suscripciones 
     * a un único flujo y son capaces de emitir eventos.
        Como los eventos solo los quieres generar a nivel interno, lo que debes hacer 
        es crear un Subject privado, y exponer un Observable público con el flujo del primero.
     */
    private isLoggedSource = new Subject<boolean>();
    isLogged$ = this.isLoggedSource.asObservable(); 

    ngOnInit() {
    }

    login(credentials){

        return this.http.post(Config.URL+'/users/signin',credentials)
        .map(res => res.json())
        // .subscribe(
        //     data => {
        //         localStorage.setItem('user',JSON.stringify(data));
        //         console.log(data);
        //         if(data.status === 200){
        //             localStorage.setItem('id_token',data.token); 
        //             this.isLogged = true;
        //             this.router.navigate(['/inicio'])//,{ queryParams: {isLogged:this.isLogged}})
        //         }
                
        //     },
        //     error => console.log(error)
        // );
    }

    logout() {
        localStorage.removeItem('id_token'); 
        localStorage.removeItem('user'); 
    }

    signUp(credentials){
        return this.http.post(Config.URL+'/users/signup',credentials)
        .map(res => res.json())
        
    }

    setIsLogged(item:any){
        this.isLoggedSource.next(item);
    }
}