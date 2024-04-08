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
import { MenuComponent } from './componentes/menu/menu.component';
import { StorageCheckGuard } from './services/storage-check.service';
import { LoginAdminComponent } from './administrador/login-admin/login-admin.component';
import { InicioAdminComponent } from './administrador/inicio-admin/inicio-admin.component';
import { MenuAdminComponent } from './administrador/menu-admin/menu-admin.component';
import { EstudiantesComponent } from './administrador/estudiantes/estudiantes.component';
import { ProfesorComponent } from './administrador/profesor/profesor.component';

const routes: Routes = [
    {path: '', redirectTo: "/menu", pathMatch : "full"},
    {path:'login', component:LoginComponent},
    {path:'inicio', component:InicioComponent},
    {path:'formulario', component:FormularioComponent, canActivate: [StorageCheckGuard]},
    {path:'estudiante', component:FormularioEstudianteComponent, canActivate: [StorageCheckGuard]},
    {path:'gestion-m', component:FormularioMatriculaComponent, canActivate: [StorageCheckGuard]},
    {path:'matricula', component:MatriculaComponent, canActivate: [StorageCheckGuard]},
    {path:'informacion', component:InformacionComponent, canActivate: [StorageCheckGuard]},
    {path:'tutorial', component:TutorialComponent, canActivate: [StorageCheckGuard]},
    {path:'menu', component:MenuComponent, canActivate: [StorageCheckGuard]},
    {path:'menu-admin', component:MenuAdminComponent},
    {path:'estudiantes', component:EstudiantesComponent},
    {path:'profesor', component:ProfesorComponent},
    {path:'login-admin', component:LoginAdminComponent},
    {path:'inicio-admin', component:InicioAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
