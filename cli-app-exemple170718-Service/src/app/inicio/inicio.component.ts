import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title = 'Inicio'
  _login
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    // this.activatedRoute.params.subscribe((params: Params) => {
    //     let isLogged = params['isLogged'];
    //     console.log(params)
    //     console.log(`INICIO ISLOGGED: ${isLogged}`);
    //   });
      //this.title = 'Inicio' 
      this._login = 'Log In'
      if(localStorage.getItem('id_token') && localStorage.getItem('user')){
        let userStr = localStorage.getItem('user')
        let user = JSON.parse(userStr)
        if(user){
          this.title = `BienVenido: ${user.email}`
          this._login = 'Log Out'
        }
      }

  }

  redirectLogin(){
    this.router.navigate(['/contactenos'])
  }

}
