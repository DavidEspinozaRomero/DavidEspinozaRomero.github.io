import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppServicesService {
  #baseUrl = environment.api;

  constructor(private httpClient: HttpClient) {}

  sendMessage(json: { email: string; comment: string }) {
    const Url = `${this.#baseUrl}/contacts/personal-page-message`;
    return this.httpClient.post(Url, json);
  }
}
