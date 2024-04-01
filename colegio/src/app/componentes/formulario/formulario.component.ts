import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [InicioComponent,RouterLinkActive,RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
