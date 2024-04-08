import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaComponent } from './componentes/matricula/matricula.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioMatriculaComponent } from './componentes/formulario-matricula/formulario-matricula.component';
import { FormularioEstudianteComponent } from './componentes/formulario-estudiante/formulario-estudiante.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { TutorialComponent } from './componentes/tutorial/tutorial.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HorarioComponent } from './componentes/horario/horario.component';
import { LoginAdminComponent } from './administrador/login-admin/login-admin.component';
import { MenuAdminComponent } from './administrador/menu-admin/menu-admin.component';
import { EstudiantesComponent } from './administrador/estudiantes/estudiantes.component';
import { ProfesorComponent } from './administrador/profesor/profesor.component';
import { FormEstudianteComponent } from './administrador/form-estudiante/form-estudiante.component';
import { FormProfesorComponent } from './administrador/form-profesor/form-profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    MatriculaComponent,
    LoginComponent,
    InicioComponent,
    FormularioMatriculaComponent,
    FormularioEstudianteComponent,
    FormularioComponent,
    InformacionComponent,
    TutorialComponent,
    MenuComponent,
    EstudiantesComponent,
    ProfesorComponent,
    FormEstudianteComponent,
    FormProfesorComponent,
    HorarioComponent,
    LoginAdminComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
