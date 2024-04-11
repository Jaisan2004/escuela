import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agre-profesor',
  templateUrl: './agre-profesor.component.html',
  styleUrls: ['./agre-profesor.component.css']
})
export class AgreProfesorComponent {
  nombre_prof: string = '';
  apellido_prof: string = '';
  correo_institu_prof: string = '';
  celular_prof: string = '';
  cargo: string = '';
  contrasena: string = '';

  constructor(private toastr: ToastrService,
    private router: Router) { }

  postEstudiante() {
    if (this.nombre_prof == '' || this.apellido_prof == '') {
      this.toastr.error('Todos los campos son obligatorios');
      return;
    }

    const data = {
      nombre_prof: this.nombre_prof,
      apellido_prof: this.apellido_prof,
      correo_institu_prof: this.correo_institu_prof,
      celular_prof: this.celular_prof,
      cargo: this.cargo,
      contrasena: this.contrasena,
    };

    fetch('http://localhost:3000/profesor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // Enviamos los datos en el cuerpo de la solicitud como JSON
    })
      .then(response => {
        if (response.ok) {
          // Si la respuesta es exitosa (código de estado 200), mostrar un mensaje de éxito
          this.toastr.success('Se registro al profesor Exitosamente');
          this.router.navigate(['/profesor']);
        } else {
          // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
          this.toastr.error('Error al registrar al profesor');
        }
      })
      .catch(error => {
        console.log(error);
      });

  }
}
