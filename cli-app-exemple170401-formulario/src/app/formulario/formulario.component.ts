import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  estudiante={
    nombre:'Mohamed Bouanane',
    correo:'mohamed.bouanane@host.com'
  }

  constructor() { }

  ngOnInit() {
  }

  enviarFormulario(formulario:NgForm):void{
    console.log(formulario);
  }
}
