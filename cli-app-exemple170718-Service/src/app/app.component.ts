import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  islogged
  login = 'Log In'
  constructor(private router:Router,
              private authService:AuthService){
  }

  ngOnInit(){
   
    this.authService.isLogged$.subscribe(
      item =>{
        this.islogged = item
        if(item)
          this.login = 'Log Out'
        else
          this.login = 'Log In'
      }
    )

    
  }

}


