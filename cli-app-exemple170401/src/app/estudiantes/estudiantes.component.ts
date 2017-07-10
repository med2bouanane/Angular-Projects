import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

@Input() universidad:string; // El valor de esta variable se recibe (input) desde el componente padre AppComponent
@Input('alias') variable:string;
@Output() seleccionados = new EventEmitter();
@Output() estudiante:string;

estudiantes = ['Estudiante 1','Estudiante 2','Estudiante 3'];
  constructor() { 
    this.estudiante = "Desconocido";
  }

  ngOnInit() {
  }

  clickEstudiante(event):void{
    this.seleccionados.emit({nombre: event.target.textContent});
  }
}
