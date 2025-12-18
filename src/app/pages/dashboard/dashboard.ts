import { Component } from '@angular/core';
<<<<<<< HEAD:src/app/core/components/dashboard/dashboard.ts
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
=======
import { Header } from '../../core/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header, RouterModule],
>>>>>>> 2eb0da6cefb80a227544600f4d25fcd64c0c5ee9:src/app/pages/dashboard/dashboard.ts
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}