import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
