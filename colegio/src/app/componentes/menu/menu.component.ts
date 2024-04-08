import { Component } from '@angular/core';
import { StorageCheckGuard } from '../../services/storage-check.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private storageCheckGuard: StorageCheckGuard) { }

  ngOnChanges(): void {
    this.storageCheckGuard.canActivate;
  }
}
