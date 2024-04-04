import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEstudianteComponent } from './componentes/formulario-estudiante/formulario-estudiante.component';
import { FormularioMatriculaComponent } from './componentes/formulario-matricula/formulario-matricula.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { MatriculaComponent } from './componentes/matricula/matricula.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { TutorialComponent } from './componentes/tutorial/tutorial.component';

const routes: Routes = [
    {path: '', redirectTo: "/login", pathMatch : "full"},
    {path:'login', component:LoginComponent},
    {path:'inicio', component:InicioComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'estudiante', component:FormularioEstudianteComponent},
    {path:'gestion-m', component:FormularioMatriculaComponent},
    {path:'matricula', component:MatriculaComponent},
    {path:'informacion', component:InformacionComponent},
    {path:'tutorial', component:TutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
