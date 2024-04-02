import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEstudianteComponent } from './componentes/formulario-estudiante/formulario-estudiante.component';
import { FormularioMatriculaComponent } from './componentes/formulario-matricula/formulario-matricula.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: "/login", pathMatch : "full"},
    {path:'login', component:LoginComponent},
    {path:'inicio', component:InicioComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'estudiante', component:FormularioEstudianteComponent},
    {path:'matricula', component:FormularioMatriculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
