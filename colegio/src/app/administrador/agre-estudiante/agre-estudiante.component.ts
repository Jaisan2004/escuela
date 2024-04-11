import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agre-estudiante',
  templateUrl: './agre-estudiante.component.html',
  styleUrls: ['./agre-estudiante.component.css']
})
export class AgreEstudianteComponent {
  nombre_estu: string = '';
  apellido_estu: string = '';
  documento_identidad: string = '';
  direccion_estu: string = '';
  genero_estu: string = '';
  estu_correo: string = '';
  estu_password: string = '';
  id_acudiente: string = '';
  id_grupo: string = '';
  dataGrupo: any;
  dataAcud: any;

  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGrupo()
    this.getAcudiente()
  }

  postEstudiante() {
    if (this.nombre_estu == '' || this.apellido_estu == '') {
      this.toastr.error('Todos los campos son obligatorios');
      return;
    }

    const data = {
      nombre_estu: this.nombre_estu,
      apellido_estu: this.apellido_estu,
      documento_identidad: this.documento_identidad,
      direccion_estu: this.direccion_estu,
      genero_estu: this.genero_estu,
      estu_correo: this.estu_correo,
      estu_password: this.estu_password,
      id_acudiente: this.id_acudiente,
      id_grupo: this.id_grupo,
    };

    fetch('http://localhost:3000/alumno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // Enviamos los datos en el cuerpo de la solicitud como JSON
    })
      .then(response => {
        if (response.ok) {
          // Si la respuesta es exitosa (código de estado 200), mostrar un mensaje de éxito
          this.toastr.success('Se registro al estudiante Exitosamente');
          this.router.navigate(['/estudiantes']);
        } else {
          // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
          this.toastr.error('Error al registrar al estudiante');
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  getAcudiente() {
    fetch('http://localhost:3000/acudiente')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al traer a los acudientes');
        }
      })
      .then(data => {
        this.dataAcud = data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getGrupo() {
    fetch('http://localhost:3000/grupo')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al traer los grupos');
        }
      })
      .then(data => {
        this.dataGrupo = data;
      })
      .catch(error => {
        console.error(error);
      });
  }

}
