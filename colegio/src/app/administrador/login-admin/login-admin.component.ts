import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username: string = '';
  password: string = '';

  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

  }

  loginAdmin() {
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios');
      return;
    }

    const data = {
      correo_admin: this.username,
      contraseña_admin: this.password 
    };

    fetch('http://localhost:3000/loginAdmin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // Enviamos los datos en el cuerpo de la solicitud como JSON
    })
      .then(response => {
        if (response.ok) {
          // Si la respuesta es exitosa (código de estado 200), mostrar un mensaje de éxito
          this.toastr.success('Credenciales correctas');
          this.router.navigate(['/menu-admin']);
        } else {
          // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
          this.toastr.error('Credenciales incorrectas');
        }
      })
      .catch(error => {
        console.log(error);
      });

    fetch('http://localhost:3000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        localStorage.setItem("admin", JSON.stringify(data));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
