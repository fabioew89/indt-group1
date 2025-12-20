import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../core/models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { name: "Fabio", username: "fabio", password: "fabio123" },
    { name: "Erika", username: "erika", password: "erika123" },
    { name: "Sabrina", username: "sabrina", password: "sabrina123" },
    { name: "Leo", username: "leo", password: "leo123" },
    { name: "Cristie", username: "cristie", password: "cristie123" },
    { name: "Saymon", username: "saymon", password: "saymon123" },
    { name: "Lucas", username: "lucas", password: "lucas123" },
    { name: "LucasProf", username: "lucasprof", password: "lucasprof123" },
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

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser.set(null);
    this.authenticated.set(false);
    this.router.navigate(['login']);
  }
}
