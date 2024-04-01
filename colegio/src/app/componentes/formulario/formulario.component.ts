import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [InicioComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
