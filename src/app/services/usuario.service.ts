import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get(`${environment.api}/users?per_page=6`)
      .pipe(map((resp: any) => resp.data));
  }
}
