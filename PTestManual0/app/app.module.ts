// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';

// importación del componente raíz, definido en esta misma carpeta
import { AppInicialComponent } from './app.component';

// decorador con metadata que define un módulo
@NgModule({
    declarations:[AppInicialComponent], // cosas declaradas en este módulo
    imports:[BrowserModule,FormsModule,HttpModule], // otros módulos que necesitamos para que este funcione
    providers:[], // inyección de servicios comunes para la aplicación
    bootstrap:[] // componente raíz para el arranque
})

export class AppModule { } 