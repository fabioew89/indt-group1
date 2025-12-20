import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);

  formLogin = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  get isFormLoginInvalid(): boolean {
    const login = this.formLogin.get('login')
    const password = this.formLogin.get('password')

    const isLoginInvalid = login?.invalid && login?.touched;
    const isPasswordInvalid = password?.invalid && password?.touched;

    return !!(isLoginInvalid || isPasswordInvalid)
  }

  handleLogin() {
    const username = this.formLogin.get('login')?.value || "";
    const password = this.formLogin.get('password')?.value || "";
    console.log(username, password)

    this.authService.login(username, password);
  }
}
