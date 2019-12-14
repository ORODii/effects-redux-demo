import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';

import { CARGAR_USUARIOS } from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) { }

  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(CARGAR_USUARIOS),
    mergeMap(() => this.usuariosService.getUsers())
    )
  );
}
