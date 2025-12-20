import { Component } from '@angular/core';
import { Header } from '../../core/components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
