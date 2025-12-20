import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../core/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { name: "Fabio", username: "Fabio", password: "Fabio123" },
    { name: "Erika", username: "Erika", password: "Erika123" },
    { name: "Sabrina", username: "Sabrina", password: "Sabrina123" },
    { name: "Leo", username: "Leo", password: "Leo123" },
    { name: "Cristie", username: "Cristie", password: "Cristie123" },
    { name: "Saymon", username: "Saymon", password: "Saymon123" },
    { name: "Lucas", username: "Lucas", password: "Lucas123" },
    { name: "LucasProf", username: "LucasProf", password: "LucasProf123" },
  ]

  private router = inject(Router);

  currentUser = signal<User | null>(this.initializedUser());
  authenticated = signal<boolean>(!!this.currentUser());

  initializedUser(): User | null {
    // Verifica se há um usuário ativo localStorage(Cache do navegador)
    const storedUser = localStorage.getItem('currentUser');
    // Se tiver, retorna este usuário. Se não, null.
    return storedUser ? JSON.parse(storedUser) : null;
  }

  login(username: string, password: string): boolean {
    // Verifica se o usuário existe, e retorna-o para user
    const user = this.users.find((user) => user.username === username && user.password === password);

    // Se o usuário existir, adiciona-o como usuário ativo atual
    if (user) {
      this.currentUser.set(user);
      // Coloca o usuário no localStorage e retorna verdadeiro
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated.set(true);
      this.router.navigate(['dashboard'])

      return true;
    }

    return false;
  }
}
