import { Component } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  data: any;

  
  ngOnInit(): void{
    this.getProfesor();

  }

  getProfesor(){
    fetch(`http://localhost:3000/profesores`)
      .then(response => response.json())
      .then(data => {
        this.data = data;
      })
      .catch(error => {
        console.error('Error al traer datos del estudiante:', error);
      });
  }

}
