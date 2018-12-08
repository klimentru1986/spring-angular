import { Injectable } from '@angular/core';
import { AuthServiceModule } from './auth-service.module';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthService {
  private readonly url = '/api/auth';

  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<boolean> {
    const headers = new HttpHeaders({
      authorization:
        'Basic ' + btoa(credentials.name + ':' + credentials.password)
    });

    return this.http.post<boolean>(`${this.url}/login`, credentials, {
      headers
    });
  }
}
