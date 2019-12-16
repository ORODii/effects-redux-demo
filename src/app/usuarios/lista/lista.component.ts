import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { cargarUsuarios } from '../../store/actions';

import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {
  public usuarios: Usuario[];
  public loading: boolean;
  public error: any;

  private usersSubscribe: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(cargarUsuarios());

    this.usersSubscribe = this.store.select('usuarios').subscribe(data => {
      this.usuarios = data.users;
      this.loading = data.loading;
      this.error = data.error;
    });
  }

  ngOnDestroy() {
    this.usersSubscribe.unsubscribe();
  }
}
