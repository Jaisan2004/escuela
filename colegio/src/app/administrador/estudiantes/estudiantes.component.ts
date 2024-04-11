import { Component } from '@angular/core';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  data: any;

  
  ngOnInit(): void{
    this.getEstudiante();

  }

  getEstudiante(){
    fetch(`http://localhost:3000/alumnos`)
      .then(response => response.json())
      .then(data => {
        this.data = data;
      })
      .catch(error => {
        console.error('Error al traer datos del estudiante:', error);
      });
  }

}
