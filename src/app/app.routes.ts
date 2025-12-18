import { Routes } from '@angular/router';
import { Login } from './core/components/login/login';
import { ItemCadastroComponent } from './core/components/item-cadastro/item-cadastro';
import { Dashboard } from './core/components/dashboard/dashboard';
import { MainLayoutComponent } from './core/components/main-layout/main-layout';

export const routes: Routes = [
    {
        path: 'novo-item',
        component: ItemCadastroComponent,
        title: "Novo Item"
    },
    {
        path: "login",
        component: Login,
        title: "Login"
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: "",
                component: Dashboard,
                title: "Início | Rust Manufacturing"
            }
        ]
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
