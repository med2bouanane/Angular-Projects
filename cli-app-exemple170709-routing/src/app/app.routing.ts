import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { InicioComponent } from './inicio/inicio.component';


// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent }
];

export const routing = RouterModule.forRoot(routes)

/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule { }

export const routedComponents = [InicioComponent];
*/