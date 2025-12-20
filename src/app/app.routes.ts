import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Create } from './pages/create/create';
import { CreateUser } from './pages/create-user/create-user';

export const routes: Routes = [
    { path: "login", component: Login, title: "Login"},
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "dashboard", component: Dashboard, title: "Dashboard"},
    { path: "create", component: Create, title: "Create"},
    {path: "create-user", component: CreateUser, title: "Create User"},
];
