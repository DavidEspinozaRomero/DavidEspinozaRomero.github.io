import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

import { AppService } from 'src/app/services/app.service';
import { UtilsService } from 'src/app/utils/utils.service';
import { CustomToastService } from 'src/app/services/custom-toast.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  //#region Variables
  contactForm = this.fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.pattern(RegExpAPP.email),
      ],
    ],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });
  //#endregion Variables

  constructor(
    private readonly fb: FormBuilder,
    private readonly appService: AppService,
    public readonly utils: UtilsService,
    public readonly toast: CustomToastService
  ) {}

  //#region Apis
  //Post
  #sendMessage(data: any) {
    this.appService
      .sendMessage(data)
      .subscribe({
        next: (res) => {
          this.toast.success('Message send', 'Done!');
          this.contactForm.reset();
        },
        error: (e) => {
          this.toast.error(
            'somethig gone wrong sorry, pls send an email directly'
          );
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

export const RegExpAPP = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};
