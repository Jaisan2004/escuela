import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-estudiante',
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent {

  data: any;
  documento_identidad: string = ''; // La cédula o documento de identidad
  id_estu: number | undefined;
  nombre_estu: string | undefined;
  apellido_estu: string | undefined;
  direccion_estu: string | undefined;
  genero_estu: string | undefined;
  correo_institu_estu: string | undefined;

  constructor(
    private toastr: ToastrService,
    private router: Router) { }

  getEstudiante(documento_identidad: string) {
    fetch(`http://localhost:3000/alumMatri/${documento_identidad}`)
      .then(response => response.json())
      .then(data => {
        this.data = data[0];
        this.id_estu = this.data.id_estu;
        this.nombre_estu = this.data.nombre_estu;
        this.apellido_estu = this.data.apellido_estu;
        this.documento_identidad = this.data.documento_identidad;
        this.direccion_estu = this.data.direccion_estu;
        this.genero_estu = this.data.genero_estu;
        this.correo_institu_estu = this.data.correo_institu_estu;
      })
      .catch(error => {
        console.error('Error al traer datos del estudiante:', error);
      });
  }

  updateEstudiante() {
    this.getEstudiante(this.documento_identidad);
  
    const data = {
      nombre_estu: this.nombre_estu, 
      apellido_estu: this.apellido_estu, 
      documento_identidad: this.documento_identidad, 
      direccion_estu: this.direccion_estu, 
      genero_estu: this.genero_estu, 
      correo_institu_estu: this.correo_institu_estu, 
    };
  
    fetch(`http://localhost:3000/alumMatri/${this.id_estu}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          this.toastr.success('Se actualizó la información del Estudiante');
          this.router.navigate(['/gestion-m']);
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
