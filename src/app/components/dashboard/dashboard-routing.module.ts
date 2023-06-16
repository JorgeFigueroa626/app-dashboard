import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { SomosComponent } from './somos/somos.component';
import { CoctactosComponent } from './coctactos/coctactos.component';

//REDIRECIONAMOS LOS COMPONENTE CON EL CHILDRE DE INICIO,REPORTE, ETC
const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path:'', component:InicioComponent},
    {path:'', component:InicioComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path:'reportes', component:ReportesComponent},
    {path:'crear-usuario', component:CrearUsuarioComponent},
    {path:'somos', component:SomosComponent},
    {path:'coctactos', component:CoctactosComponent},

    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
