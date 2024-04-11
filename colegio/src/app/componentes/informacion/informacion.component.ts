import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

  datalocal:any;
  correo: string='';
  documento_identidad: string='';
  nombre: string='';
  genero: string='';

  ngOnInit(): void{
    const abogado = localStorage.getItem("estudiante");
    if (abogado) {
      try {
        this.datalocal = JSON.parse(abogado);
        this.nombre = this.datalocal[0].nombre_estu;
        this.documento_identidad = this.datalocal[0].documento_identidad;
        this.correo = this.datalocal[0].correo_institu_estu;
        this.genero = this.datalocal[0].genero_estu;
      } catch (error) {
        console.error("Error al parsear estudiante: ", error);
      }
    }
  }

}
