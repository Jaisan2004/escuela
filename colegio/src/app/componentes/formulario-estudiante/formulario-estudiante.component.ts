import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-formulario-estudiante',
  standalone: true,
  imports: [InicioComponent,RouterLinkActive,RouterLink],
  templateUrl: './formulario-estudiante.component.html',
  styleUrl: './formulario-estudiante.component.css'
})
export class FormularioEstudianteComponent {

}
