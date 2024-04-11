import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SesionAdminService {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const administrador = localStorage.getItem("admin");
    if (!administrador) {
      this.router.navigate(['/login-admin']);
      return false;
    }
    return true;
  }
}
