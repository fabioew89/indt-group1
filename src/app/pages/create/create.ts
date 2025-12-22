import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { formValidators } from '../../shared/validators/form.validators';
import { TrackedItems } from '../../shared/services/tracked-items';
import { IItem } from '../../core/models/IItem';

@Component({
  selector: 'app-create',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  formBuilder = inject(FormBuilder);
  trackedItems = inject(TrackedItems);
  router = inject(Router);

  // nonNullable impede valores null ao usar '.reset' e de reiniciar estados como '.touched'.
  formCreate = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, formValidators.nameValidator()]],
    description: ['', [Validators.required, formValidators.descriptionValidator()]],
    category: ['', [Validators.required]],
    localization: ['', [Validators.required, formValidators.localizationValidator()]],
    initialStatus: ['Pendente', [Validators.required]],
  })

  isNameInvalid() {
    const name = this.formCreate.get('name');

    return name?.invalid && name?.touched;
  }

  isDescriptionInvalid() {
    const description = this.formCreate.get('description');

    return description?.invalid && description?.touched;
  }

  isCategoryInvalid() {
    const category = this.formCreate.get('category');

    return category?.invalid && category?.touched;
  }

  isLocalizationInvalid() {
    const localization = this.formCreate.get('localization');

    return localization?.invalid && localization?.touched;
  }

  createItem() {
    if (this.formCreate.valid) {
      const newItem = this.formCreate.getRawValue() as IItem;

      this.trackedItems.createItem(newItem);

      this.formCreate.reset();
      this.router.navigate(['dashboard']);
    }
  }
}
