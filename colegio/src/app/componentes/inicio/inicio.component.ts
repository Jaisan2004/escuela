import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  data: any;
  nombre_acu: string | undefined;
  nombre_estu: string | undefined;
  genero_estu: string | undefined;

  ngOnInit(): void{
    const estudiante = localStorage.getItem("estudiante");
    if (estudiante) {
      try {
        this.data = JSON.parse(estudiante);
        this.nombre_acu=this.data[0].nombre_acu;
        this.nombre_estu=this.data[0].nombre_estu;
        this.genero_estu=this.data[0].genero_estu;
      } catch (error) {
        console.error("Error al parsear estudiante: ", error);
      }
    }


  }
  cerrarSesion(){
      localStorage.removeItem("estudiante");
  }

}
