import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-formulario-matricula',
  standalone: true,
  imports: [InicioComponent,RouterLinkActive,RouterLink],
  templateUrl: './formulario-matricula.component.html',
  styleUrl: './formulario-matricula.component.css'
})
export class FormularioMatriculaComponent {

}
