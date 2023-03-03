import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CustomToastService {
  //#region variables
  #successBase = {
    TitleDefault: 'Listo',
    MessageDefault: 'Complete',
  };
  #errorBase = {
    TitleDefault: 'Error',
    MessageDefault: 'Cant do the action',
  };
  #infoBase = {
    TitleDefault: 'Check the info',
    MessageDefault: 'Ar u sure??',
  };
  #warningBase = {
    TitleDefault: 'Wait!',
    MessageDefault: 'Ar u sure??',
  };
  //#endregion variables

  constructor(private readonly toast: ToastrService) {}

  success(message?: string, title?: string) {
    return this.toast.success(
      message || this.#successBase.MessageDefault,
      title || this.#successBase.TitleDefault
    );
  }

  error(message?: string, title?: string) {
    return this.toast.error(
      message || this.#errorBase.MessageDefault,
      title || this.#errorBase.TitleDefault
    );
  }
  info(message?: string, title?: string) {
    return this.toast.info(
      message || this.#infoBase.MessageDefault,
      title || this.#infoBase.TitleDefault
    );
  }
  warning(message?: string, title?: string) {
    return this.toast.warning(
      message || this.#warningBase.MessageDefault,
      title || this.#warningBase.TitleDefault
    );
  }
}
