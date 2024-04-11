import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageCheckGuard  {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const estudiante = localStorage.getItem("estudiante");
    if (!estudiante) {
      this.router.navigate(['/login']); // Redirige a la página de error
      return false;
    }
    return true;
  }
}