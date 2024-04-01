import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormularioEstudianteComponent } from './componentes/formulario-estudiante/formulario-estudiante.component';
import { FormularioMatriculaComponent } from './componentes/formulario-matricula/formulario-matricula.component';

export const routes: Routes = [{path: '', redirectTo: "/login", pathMatch : "full"},
{path:'login', component:LoginComponent},{path:'inicio', component:InicioComponent},
{path:'formulario', component:FormularioComponent},{path:'estudiante', component:FormularioEstudianteComponent},{
    path:'matricula', component:FormularioMatriculaComponent}];
