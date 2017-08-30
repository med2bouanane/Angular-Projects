import { ProductsComponent } from './products/products.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'products', component: ProductsComponent }
];

export const routing = RouterModule.forRoot(routes)