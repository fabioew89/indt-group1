import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class formValidators {
    static nameValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const name = control.value as string;

            const minLength = 3;
            const maxLength = 100;

            console.log(name.trim().length)

            if (name.trim().length < minLength || name.trim().length > maxLength) {
                return { 'minLength': minLength, 'maxLength': maxLength };
            }

            return null
        }
    }

    static descriptionValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const description = control.value as string;

            const minLength = 10;
            const maxLength = 500;

            if (description.trim().length < minLength || description.trim().length > maxLength) {
                return { 'minLength': minLength, 'maxLength': maxLength };
            }

            return null;
        }
    }

    static localizationValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const localization = control.value as string;

            const minLength = 2;
            const maxLength = 150;

            if (localization.trim().length < minLength || localization.trim().length > maxLength) {
                return { 'minLength': minLength, 'maxLength': maxLength };
            }

            return null;
        }
    }
}