import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Create } from './pages/create/create';
import { CreateUser } from './pages/create-user/create-user';
import { authGuard } from './core/guards/auth.guard';
import { publicGuard } from './core/guards/public.guard';

export const routes: Routes = [
    { path: "login", component: Login, title: "Login", canActivate: [publicGuard] },
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "dashboard", component: Dashboard, title: "Dashboard", canActivate: [authGuard] },
    { path: "create", component: Create, title: "Create", canActivate: [authGuard] },
    { path: "create-user", component: CreateUser, title: "Create User", canActivate: [authGuard] },
];
