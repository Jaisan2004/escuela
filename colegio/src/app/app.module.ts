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
import { EstudiantesComponent } from './admistrador/estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './admistrador/form-estudiante/form-estudiante.component';
import { ProfesorComponent } from './admistrador/profesor/profesor.component';
import { FormProfesorComponent } from './admistrador/form-profesor/form-profesor.component';
import { HorarioComponent } from './componentes/horario/horario.component';


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
    FormEstudianteComponent,
    ProfesorComponent,
    FormProfesorComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
