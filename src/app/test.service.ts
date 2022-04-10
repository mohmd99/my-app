import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Isurvey } from './serveys';
import { Ipermission } from './permission';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private HttpClient: HttpClient) {}

  currentSelectedSurvey = null;

  getServey() {
    return this.HttpClient.get<Isurvey[]>(
      'https://mocki.io/v1/acdec257-dba2-448d-842d-8a0a4f0f2883'
    );
  }

  getPermission() {
    return this.HttpClient.get<Ipermission[]>(
      'https://mocki.io/v1/d246076d-79e5-4bac-8316-98607f2695d4'
    );
  }
}
