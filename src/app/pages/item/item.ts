import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TrackedItems } from '../../shared/services/tracked-items';
import { IItem } from '../../core/models/IItem';

@Component({
  selector: 'app-item',
  imports: [RouterLink],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit {
  @Input() id?: string;

  router = inject(Router);

  trackedItems = inject(TrackedItems);

  selectedItem = signal<IItem | undefined>(undefined);

  ngOnInit(): void {
    if (this.id) {
      const searchedItem = this.trackedItems.trackedItems().find(i => i.id === this.id);

      if (searchedItem !== undefined) {
        this.selectedItem.set(searchedItem);
      } else {
        this.router.navigate(['dashboard'])
      }
    }
  }
}
