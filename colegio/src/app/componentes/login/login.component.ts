import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  data: any;

  constructor(private toastr: ToastrService,
    private router: Router){}

  ngOnInit(): void {
    
  }
  
  login(){
    if(this.username == '' || this.password == ''){
        this.toastr.error('Todos los campos son obligatorios');
        return;
    }

    const data = {
      estu_correo: this.username, // Cambiado a 'user' para que coincida con el backend
      estu_password: this.password // Cambiado a 'pass' para que coincida con el backend
    };

    fetch('http://localhost:3000/loginEstu/', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data) // Enviamos los datos en el cuerpo de la solicitud como JSON
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa (código de estado 200), mostrar un mensaje de éxito
            this.toastr.success('Credenciales correctas');
            this.router.navigate(['/menu']);
        } else {
            // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
            this.toastr.error('Credenciales incorrectas');
        }
    })
    .catch(error=>{
        console.log(error);
    });

    fetch('http://localhost:3000/alumnoAcu',{
      method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error en la operación fetch');
        }
      })
      .then(data => {
        localStorage.setItem("estudiante", JSON.stringify(data));
      })
      .catch(error => {
        console.error(error);
      });
}
}
