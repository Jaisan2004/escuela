import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent {

  item: any;
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

  constructor(private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = params;
    });
      this.nombre_estu = this.item.nombre_estu,
      this.apellido_estu = this.item.apellido_estu,
      this.documento_identidad = this.item.documento_identidad,
      this.direccion_estu = this.item.direccion_estu,
      this.genero_estu = this.item.genero_estu,
      this.estu_correo = this.item.correo_institu_estu,
      this.estu_password = this.item.contrasena,
      this.id_acudiente = this.item.id_acud,
      this.id_grupo = this.item.id_grupo
    this.getGrupo();
    this.getAcudiente();
  }

  updateEstudiante() {

    const data = {
      nombre_estu: this.nombre_estu,
      apellido_estu: this.apellido_estu,
      documento_identidad: this.documento_identidad,
      direccion_estu: this.direccion_estu,
      genero_estu: this.genero_estu,
      correo_institu_estu: this.estu_correo,
      contrasena: this.estu_password,
      id_acudiente: this.id_acudiente,
      id_grupo: this.id_grupo
    };

    fetch(`http://localhost:3000/alumno/${this.item.id_estu}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          this.toastr.success('Se actualizó la información del Estudiante');
          this.router.navigate(['/estudiantes']);
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
