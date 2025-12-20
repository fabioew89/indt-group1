import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth-service";

export const publicGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.authenticated()) {
        router.navigate(['dashboard'])
        return false;
    }

    return true;
}