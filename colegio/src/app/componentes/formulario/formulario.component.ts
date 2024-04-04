import { Component, ChangeDetectorRef } from '@angular/core';
import { jsPDF } from "jspdf";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  cedula_acud: string = '';
  data: any;
  id_acud: number|undefined;
  nombre_acud: string | undefined;
  apellido_acud: string | undefined;
  relacion_estu_acud: string | undefined;
  celular_acud: string | undefined;
  correo_acud: string | undefined;
  empresa_trab_acud: string | undefined;
  direccion_trab_acud: string | undefined;
  ocupacion_acud: string | undefined;
  telefono_trab_acud: string | undefined;
  nombre_estudiante: string = 'Juan Pérez'; // Ejemplo, reemplaza con la variable correspondiente
  numero_documento_estudiante: string = '123456789'; // Ejemplo
  anio_periodo: string = '2023/2024';

  constructor(
    private toastr: ToastrService,
    private router: Router) { }

  getAcudiente(cedula_acud: string) {
    fetch(`http://localhost:3000/acudMatri/${cedula_acud}`)
      .then(response => response.json())
      .then(data => {
        this.data = data[0];
        this.id_acud = this.data.id_acud // Asumiendo que la respuesta es un arreglo y solo necesitas el primer elemento
        this.nombre_acud = this.data.nombre_acud;
        this.apellido_acud = this.data.apellido_acud;
        this.relacion_estu_acud = this.data.relacion_estu_acud;
        this.celular_acud = this.data.celular_acud;
        this.correo_acud = this.data.correo_acud;
        this.empresa_trab_acud = this.data.empresa_trab_acud;
        this.direccion_trab_acud = this.data.direccion_trab_acud;
        this.ocupacion_acud = this.data.ocupacion_acud;
        this.telefono_trab_acud = this.data.telefono_trab_acud;
      })
      .catch(error => {
        console.error('Error al traer datos del acudiente:', error);
      });
  }

  updateAcudiente() {
    this.getAcudiente(this.cedula_acud);

    const data = {
      nombre_acud: this.nombre_acud, 
      apellido_acud: this.apellido_acud, 
      cedula_acud: this.cedula_acud, 
      relacion_estu_acud: this.relacion_estu_acud, 
      celular_acud: this.celular_acud, 
      correo_acud: this.correo_acud, 
      empresa_trab_acud: this.empresa_trab_acud, 
      direccion_trab_acud: this.direccion_trab_acud, 
      ocupacion_acud: this.ocupacion_acud,
      telefono_trab_acud: this.telefono_trab_acud
    };
    console.log(this.id_acud);
    fetch(`http://localhost:3000/acudMatri/${this.id_acud}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          this.toastr.success('Se Actualizo la informacion del Acudiente');
          this.router.navigate(['/estudiante']);
        } else {
          throw new Error('Error en la operación fetch');
        }
      })
      .then(data => {
        console.log('Acudiente actualizado correctamente:', data);
        // Aquí puedes realizar alguna acción adicional si lo deseas
      })
      .catch(error => {
        console.error('Error al actualizar la petición:', error);
      });




  }


  // Asegúrate de que estas propiedades estén definidas y actualizadas en tu componente
  // Ejemplo

  generarPDF() {
    const doc = new jsPDF();
    const fechaActual = new Date().toLocaleDateString();


    const texto = `
Confirmación de Matriculación del Estudiante
 
Nos complace informar que el estudiante ${this.nombre_estudiante}, con número de documento ${this.numero_documento_estudiante}, ha sido exitosamente matriculado en nuestro sistema para el periodo académico ${this.anio_periodo}. A continuación, detallamos la información del acudiente relacionada con esta matriculación:
 
- Nombre del Acudiente: ${this.nombre_acud || ''}
- Apellido del Acudiente: ${this.apellido_acud || ''}
- Cédula del Acudiente: ${this.cedula_acud || ''}
- Relación con el Estudiante: ${this.relacion_estu_acud || ''}
- Celular del Acudiente: ${this.celular_acud || ''}
- Correo Electrónico del Acudiente: ${this.correo_acud || ''}
- Empresa del Acudiente: ${this.empresa_trab_acud || ''}
- Dirección del Trabajo del Acudiente: ${this.direccion_trab_acud || ''}
- Ocupación del Acudiente: ${this.ocupacion_acud || ''}
- Teléfono del Trabajo del Acudiente: ${this.telefono_trab_acud || ''}
 
Nos alegramos de contar con ${this.nombre_estudiante} como parte de nuestra comunidad educativa y estamos seguros de que su experiencia en nuestra institución será enriquecedora tanto para él/ella como para sus compañeros y profesores.
 
Para cualquier consulta o información adicional, no dude en ponerse en contacto con nosotros.
 
Fecha: ${fechaActual}`;

    // Ajusta el inicio del texto y su máximo ancho para una correcta visualización
    doc.text(texto, 10, 10, { maxWidth: 190 });
    doc.save('Confirmacion_Matriculacion.pdf');
  }
}
