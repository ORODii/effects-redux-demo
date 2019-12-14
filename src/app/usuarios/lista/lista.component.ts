import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { cargarUsuarios } from '../../store/actions';

import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  public usuarios: Usuario[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(cargarUsuarios());
  }
}
