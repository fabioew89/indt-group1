import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { formValidators } from '../../shared/validators/form.validators';

@Component({
  selector: 'app-create',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  formBuilder = inject(FormBuilder);

  formCreate = this.formBuilder.group({
    name: ['', [Validators.required, formValidators.nameValidator()]],
    description: ['', [Validators.required, formValidators.descriptionValidator()]],
    category: ['', [Validators.required]],
    localization: ['', [Validators.required, formValidators.localizationValidator()]],
    initialState: ['Pendente', [Validators.required]],
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
}
