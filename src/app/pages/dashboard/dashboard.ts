import { Component, inject } from '@angular/core';
import { Header } from '../../core/components/header/header';
import { RouterModule } from '@angular/router';
import { TrackedItems } from '../../shared/services/tracked-items';

@Component({
  selector: 'app-dashboard',
  imports: [Header, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  trackedItems = inject(TrackedItems);
}
