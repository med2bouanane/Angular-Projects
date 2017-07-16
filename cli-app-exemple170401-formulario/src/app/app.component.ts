import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  miUniversidad = 'Politécnica de Madrid';
  alias = 'Input Alias';

  imgUrl = "https://cdn4.iconfinder.com/data/icons/logos-3/504/angularjs-128.png";
  redondeadas=true;
  padding = true;
  btns=["default","primary","success","info","warning","danger","link"];
  input='';

  message(btn){
    alert("Este es un mensaje !!!"+btn);
  }

  delete(){
    this.input = '';
  }

  change(event){
    this.input = event.target.value;
  }


  mostrarEstudiante(event):void{
    alert(event.nombre);
  }
}
