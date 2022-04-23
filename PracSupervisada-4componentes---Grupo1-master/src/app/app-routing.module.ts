import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { AgregarEmpresaComponent } from './components/agregar-empresa/agregar-empresa.component';
import { AggEmpresaComponent } from './components/agg-empresa/agg-empresa.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pag-principal', component: PagPrincipalComponent},
  {path: "agregar-empresa", component: AgregarEmpresaComponent},
  {path: "agg-empresa", component:AggEmpresaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
