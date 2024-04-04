import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-formulario-matricula',
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.css']
})
export class FormularioMatriculaComponent {

  data: any;
  nombre_estu: string | undefined;
  documento_identidad: string | undefined;
  nombre_acu: string | undefined;
  cedula_acud: string | undefined;
  relacion_estu_acud: string | undefined;
  anio_periodo: string = '2024-2';
  tipo_matricula: string = 'Ordinaria';
  valor: string = '1.500.000';

  ngOnInit(): void {
    const estudiante = localStorage.getItem("estudiante");
    if (estudiante) {
      try {
        this.data = JSON.parse(estudiante);
        this.nombre_estu = this.data[0].nombre_estu;
        this.documento_identidad = this.data[0].documento_identidad;
        this.nombre_acu = this.data[0].nombre_acu;
        this.cedula_acud = this.data[0].cedula_acud;
        this.relacion_estu_acud = this.data[0].relacion_estu_acud;
      } catch (error) {
        console.error("Error al parsear estudiante: ", error);
      }
    }
  }

  generarPDF() {
    const doc = new jsPDF();
    const fechaActual = new Date().toLocaleDateString();

    const texto = `
Recibo de Pago de Matrícula

Fecha: ${fechaActual}
Nombre del Estudiante: ${this.nombre_estu}
Documento de Identidad: ${this.documento_identidad}
Año del Periodo Académico: ${this.anio_periodo}
Tipo de Matrícula: ${this.tipo_matricula}
Valor de la Matrícula: ${this.valor}

Datos del Acudiente:
- Nombre Completo: ${this.nombre_acu || ''}
- Cédula: ${this.cedula_acud || ''}
- Relación con el Estudiante: ${this.relacion_estu_acud || ''}

Recuerde que el valor total de la matrícula debe ser cancelado antes de la fecha límite establecida. Para cualquier consulta o información adicional, no dude en ponerse en contacto con nosotros.

¡Gracias por confiar en nuestra institución educativa!
`;

    // Ajusta el inicio del texto y su máximo ancho para una correcta visualización
    doc.text(texto, 10, 10, { maxWidth: 190 });
    doc.save('Recibo_Matricula.pdf');
  }
}
