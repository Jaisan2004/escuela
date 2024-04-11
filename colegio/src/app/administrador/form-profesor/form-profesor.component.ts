import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrls: ['./form-profesor.component.css']
})
export class FormProfesorComponent {

  item: any;
  nombre_prof: string = '';
  apellido_prof: string = '';
  correo_institu_prof: string = '';
  celular_prof: string = '';
  cargo: string = '';
  contrasena: string = '';

  constructor(private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = params;
    });
      this.nombre_prof = this.item.nombre_prof,
      this.apellido_prof = this.item.apellido_prof,
      this.correo_institu_prof = this.item.correo_institu_prof,
      this.celular_prof = this.item.celular_prof,
      this.cargo = this.item.cargo,
      this.contrasena = this.item.contrasena
  }

  updateProfesor() {

    const data = {
      nombre_prof: this.nombre_prof,
      apellido_prof: this.apellido_prof,
      correo_institu_prof: this.correo_institu_prof,
      celular_prof: this.celular_prof,
      cargo: this.cargo,
      contrasena: this.contrasena,
    };

    fetch(`http://localhost:3000/profesor/${this.item.id_prof}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          this.toastr.success('Se actualizó la información del Estudiante');
          this.router.navigate(['/profesor']);
        } else {
          throw new Error('Error en la operación fetch');
        }
      })
      .then(data => {
        console.log('Estudiante actualizado correctamente:', data);
        // Aquí puedes realizar alguna acción adicional si lo deseas
      })
      .catch(error => {
        console.error('Error al actualizar el Estudiante:', error);
      });
  }
}
