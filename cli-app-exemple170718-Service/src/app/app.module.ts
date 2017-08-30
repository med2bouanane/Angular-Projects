import { AuthService } from './common/auth.service';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactenosComponent,
    InicioComponent,
    NosotrosComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
