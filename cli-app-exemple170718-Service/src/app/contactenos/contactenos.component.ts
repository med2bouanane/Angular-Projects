import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../common/auth.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';


// interface Credentials{
//   email: string,
//   password: string
// } 

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {


  credentials = {email:"",password:""}
  isLogged = false
  msg = ''
  error = false
  //credentials: Credentials;

  constructor(private auth: AuthService,private router:Router) {
    
   }

  ngOnInit() {

    this.auth.setIsLogged(false)

    console.log(`IS LOGGED: ${this.isLogged}`)
    if(localStorage.getItem('id_token') ){
        this.isLogged = true
        this.auth.setIsLogged(true)
      }

  }

  //initCredentials(credentials: Credentials):void{}
  

  enviarFormulario(credentials):void{
    console.log(credentials);
    this.auth.login(credentials)
    .subscribe(
            data => {
                localStorage.setItem('user',JSON.stringify(data));
                console.log(data);
                this.error = false
                if(data.status === 200){
                    localStorage.setItem('id_token',data.token); 
                    this.isLogged = true;
                    this.auth.setIsLogged(true)
                    this.router.navigate(['/inicio'])//,{ queryParams: {isLogged:this.isLogged}})
                }
                else{
                  this.error = true
                  this.msg = data.message
                }
                  
            },
            error => console.log(error)
        );

  }

  _logout(){
    console.log('Log Out')
    this.auth.logout()
    this.auth.setIsLogged(false)
    this.isLogged = false
  }

  signUp(credentials){
    console.log('Sign Up')
    this.auth.signUp(credentials)
    .subscribe(
            data => {
                localStorage.setItem('user',JSON.stringify(data));
                console.log(data);
                this.error = false
                if(data.status === 200){
                    localStorage.setItem('id_token',data.token); 
                    this.isLogged = true;
                    this.auth.setIsLogged(true)
                    this.router.navigate(['/inicio'])//,{ queryParams: {isLogged:this.isLogged}})
                }
                else{
                  this.error = true
                  this.msg = data.message
                }
                  
            },
            error => console.log(error)
        );
  }
}
