import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { SomosComponent } from './components/dashboard/somos/somos.component';
import { CoctactosComponent } from './components/dashboard/coctactos/coctactos.component';

const routes: Routes = [
  //REDIRECIONA LAS RUTAS DE LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (x) => x.DashboardModule
      ),
  },
  
  { path: 'somos', component: SomosComponent },
  { path: 'contactos', component: CoctactosComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
