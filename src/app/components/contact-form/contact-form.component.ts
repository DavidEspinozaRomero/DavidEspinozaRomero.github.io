import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { AppServicesService } from 'src/app/services/app-services.service';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  //#region Variables
  contactForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        // Validators.pattern(/d/)
      ],
    ],
    comment: ['', [Validators.required, Validators.minLength(5)]],
  });
  //#endregion Variables

  constructor(
    private readonly fb: FormBuilder,
    private readonly appService: AppServicesService,
    public readonly utils: UtilsService
  ) {}

  //#region Apis
  //Post
  #sendMessage(data: any) {
    this.appService
      .sendMessage(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.log(e);
        },
      })
      .add();
  }
  //#endregion Apis

  //#region Methods
  onSubmit(formG: FormGroup) {
    formG.markAllAsTouched();
    if (formG.invalid) return;

    const dataForm = structuredClone(formG.value);
    this.#sendMessage(dataForm);
  }
  //#endregion Methods
}
